import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './core/local-storage.service';
import { Observable } from 'rxjs';
import { ServiceResult } from '../models/core/service-result';
import * as qs from 'qs';

@Injectable({
    providedIn: 'root'
})
export class WebService {

    constructor(
        private http: HttpClient,
        private store: LocalStorageService) { }

    private post(action: string, param: object): Observable<ServiceResult> {
        // const paramsStr = encryptedDES(param);// 加密传输
        const paramsStr = qs.stringify(param);
        // console.log('action: ' + action + ',param: ' + paramsStr);
        return this.http.post<ServiceResult>('api/' + action, paramsStr);
    }

    private postJson(action: string, param: string): Observable<ServiceResult> {
        return this.http.post<ServiceResult>('api/' + action, param);
    }

    // 下面写业务系统的请求
    // doSomething(): Observable<ServiceResult> {
    //     return this.post('business/doSomething', {});
    // }
}