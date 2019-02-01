import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BackstageDefaultComponent } from './layout/backstage-default/backstage-default.component';
import { ErrorUnkonwComponent } from './pages/errors/error-unkonw/error-unkonw.component';
import { ErrorNotFoundComponent } from './pages/errors/error-not-found/error-not-found.component';
import { HeaderComponent } from './layout/backstage-default/header/header.component';
import { SidebarComponent } from './layout/backstage-default/sidebar/sidebar.component';
import { ReuseTabComponent } from './layout/backstage-default/reuse-tab/reuse-tab.component';
import { RouteReuseStrategy } from '@angular/router';
import { ErrorsRoutingModule } from './pages/errors/errors-routing.module';
import { FooterComponent } from './layout/backstage-default/footer/footer.component';
import { SimpleReuseStrategy } from './services/core/simple-reuse-strategy';

registerLocaleData(en);


// 错识页面组件
const ERRORS_COMPONENT = [
  ErrorNotFoundComponent,
  ErrorUnkonwComponent
];

// 布局组件
const LAYOUT_COMPONENT = [
  BackstageDefaultComponent,
  HeaderComponent,
  SidebarComponent,
  ReuseTabComponent
];

@NgModule({
  declarations: [
    ...ERRORS_COMPONENT,
    ...LAYOUT_COMPONENT,
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
