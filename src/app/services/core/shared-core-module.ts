import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import * as MOCKDATA from '../../../../mock';
import { RouterGuardService } from './router-guard.service';
import { SessionStorageService } from './session-storage.service';
import { LocalStorageService } from './local-storage.service';
import { MockModule } from './mock/mock-module';
import { HttpInterceptorService } from './http-core-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// 模拟数据模块
const MOCK_DATA_MODULE = environment.useMock ? [MockModule.forRoot({ data: MOCKDATA })] : [];

// 权限认证
const GUARD_SERVICE_PROVIDES = [
  RouterGuardService,
  SessionStorageService,
  LocalStorageService,
];

// 拦截器
const INTERCEPTOR_SERVICE_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...MOCK_DATA_MODULE
  ]
})
export class SharedCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: MockModule) {
    if (parentModule) {
      throw new Error(
        'PlatformModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<SharedCoreModule> {
    return {
      ngModule: SharedCoreModule,
      providers: [...GUARD_SERVICE_PROVIDES, ...INTERCEPTOR_SERVICE_PROVIDES],
    };
  }
}
