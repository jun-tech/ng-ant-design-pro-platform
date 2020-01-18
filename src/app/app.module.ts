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
import { RouteReuseStrategy } from '@angular/router';
import { AppReuseStrategy } from './services/core/app-reuse-strategy';
import { SharedCoreModule } from './services/core/shared-core-module';
import { ComponentCoreModule } from './components/component-core.module';
import { BackstageTopbannerComponent } from './layouts/backstage-topbanner/backstage-topbanner.component';
import { HeaderComponent } from './layouts/backstage-topbanner/header/header.component';
import { SidebarComponent } from './layouts/backstage-topbanner/sidebar/sidebar.component';
import { FooterComponent } from './layouts/backstage-topbanner/footer/footer.component';

registerLocaleData(en);

// 布局组件

// 默认布局
// const LAYOUT_COMPONENT = [
//   BackstageDefaultComponent,
//   HeaderComponent,
//   SidebarComponent,
//   ReuseTabComponent,
//   FooterComponent,
// ];

// 版头在上布局
const LAYOUT_COMPONENT = [
  BackstageTopbannerComponent,
  HeaderComponent,
  SidebarComponent,
  // ReuseTabComponent,
  FooterComponent,
];


@NgModule({
  declarations: [
    AppComponent,
    LAYOUT_COMPONENT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentCoreModule.forRoot(),
    SharedCoreModule.forRoot()
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: RouteReuseStrategy, useClass: AppReuseStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
