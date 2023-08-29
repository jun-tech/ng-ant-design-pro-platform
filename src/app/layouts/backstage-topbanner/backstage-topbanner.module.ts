import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { BackstageTopbannerComponent } from './backstage-topbanner.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [BackstageTopbannerComponent, SidebarComponent, HeaderComponent, FooterComponent],
  exports: [BackstageTopbannerComponent, SidebarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, NgZorroAntdModule, RouterModule]
})
export class BackstageTopBannerModule { }
