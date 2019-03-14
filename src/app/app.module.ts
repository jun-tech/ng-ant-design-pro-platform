import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { BackstageDefaultComponent } from './layouts/backstage-default/backstage-default.component';
import { HeaderComponent } from './layouts/backstage-default/header/header.component';
import { SidebarComponent } from './layouts/backstage-default/sidebar/sidebar.component';
import { ReuseTabComponent } from './layouts/backstage-default/reuse-tab/reuse-tab.component';
import { RouteReuseStrategy } from '@angular/router';
import { FooterComponent } from './layouts/backstage-default/footer/footer.component';
import { AppReuseStrategy } from './services/core/app-reuse-strategy';
import { RouterGuardService } from './services/core/router-guard.service';
import { LocalStorageService } from './services/core/local-storage.service';
import { SessionStorageService } from './services/core/session-storage.service';

registerLocaleData(en);

// 布局组件
const LAYOUT_COMPONENT = [
  BackstageDefaultComponent,
  HeaderComponent,
  SidebarComponent,
  ReuseTabComponent
];

// 权限认证
const GUARD_SERVICE = [
  RouterGuardService,
  SessionStorageService,
  LocalStorageService,
];

@NgModule({
  declarations: [
    ...LAYOUT_COMPONENT,
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ...GUARD_SERVICE,
    { provide: NZ_I18N, useValue: en_US },
    { provide: RouteReuseStrategy, useClass: AppReuseStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
