import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  // get msg(): NzMessageService {
  //   return this.injector.get(NzMessageService);
  // }

  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private checkStatus(ev: HttpResponseBase) {
    if (ev.status >= 200 && ev.status < 300) {
      return;
    }
    // const errortext = CODEMESSAGE[ev.status] || ev.statusText;
    // this.injector.get(NzNotificationService).error(
    //   `请求错误 ${ev.status}: ${ev.url}`,
    //   errortext
    // );
  }

  private handleData(ev: HttpResponseBase): Observable<any> {
    // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
    // if (ev.status > 0) {
    //   this.injector.get(_HttpClient).end();
    // }
    this.checkStatus(ev);
    // 业务处理：一些通用操作
    switch (ev.status) {
      case 200:
        break;
      case 401: // 未登录状态码
        // (this.injector.get(DA_SERVICE_TOKEN) as ITokenService).clear();
        // 移除已失效的token
        const ls = this.injector.get(LocalStorageService);
        ls.clearAll();
        // 跳转登录页
        this.goTo('/');
        break;
      case 403:
      case 404:
      case 500:
        this.goTo(`/exception/${ev.status}`);
        break;
      default:
        if (ev instanceof HttpErrorResponse) {
          console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
          return throwError(ev);
        }
        break;
    }
    return of(ev);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 统一加上服务端前缀
    const url = req.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      // url = environment.SERVER_URL + url;
    }
    // 表单方式提交
    let newReq = null;
    // 每个请求附上token
    const localStorageService = this.injector.get(LocalStorageService);
    const accessToken = localStorageService.get('x-access-token');
    newReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-access-token': accessToken ? accessToken : ''
      }
    });
    // 转交处理
    return next.handle(newReq).pipe(
      mergeMap((event: any) => {
        // 允许统一对请求错误处理
        if (event instanceof HttpResponseBase) {
          return this.handleData(event);
        }
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
  }
}
