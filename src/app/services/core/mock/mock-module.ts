import { ModuleWithProviders, Optional, SkipSelf, NgModule } from '@angular/core';
import { MockConfig } from './mock-config';
import { MockService } from './mock-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptorService } from './mock-interceptor';

@NgModule({
  providers: [MockService]
})
export class MockModule {

  constructor(@Optional() @SkipSelf() parentModule: MockModule) {

    if (parentModule) {
      throw new Error(
        'MockModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: MockConfig): ModuleWithProviders<MockModule> {
    return {
      ngModule: MockModule,
      providers: [
        MockService,
        { provide: MockConfig, useValue: config },
        { provide: HTTP_INTERCEPTORS, useClass: MockInterceptorService, multi: true },
      ],
    };
  }

  static forChild(): ModuleWithProviders<MockModule> {
    return {
      ngModule: MockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptorService, multi: true }],
    };
  }


}
