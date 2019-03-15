import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, delay } from 'rxjs/operators';
import { MockService } from './mock-service';

@Injectable()
export class MockInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mockService = this.injector.get(MockService);
    const resData = mockService.callMock(req.url);
    const res = new HttpResponse({
      status: 200,
      url: req.url,
      body: resData,
    });
    return of(res).pipe(delay(300));
    // return next.handle(req);
  }

}
