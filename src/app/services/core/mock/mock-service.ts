import { Injectable, Optional } from '@angular/core';
import { MockConfig } from './mock-config';

@Injectable()
export class MockService {
    private _config: MockConfig;
    private cached = {};

    constructor(@Optional() config: MockConfig) {
        if (config) {
            this._config = config;
        }
    }

    callMock(realUrl: string): any {
        const { _config, cached } = this;
        const data = _config.data;
        if (!cached[realUrl]) {
            Object.keys(data).forEach((key: string) => {
                const funObj = data[key];
                Object.keys(funObj).forEach((proxyUrl: string) => {
                    if (realUrl === proxyUrl) {
                        const isCached = cached[proxyUrl];
                        if (!isCached) {
                            cached[proxyUrl] = funObj[proxyUrl];
                            return;
                        } else {
                            return;
                        }
                    }
                });
            });
        }
        const res = cached[realUrl].call(this);
        console.log(`%c👽POST->${realUrl}->request`, 'background:#000;color:#bada55', res);
        return res;
    }

}
