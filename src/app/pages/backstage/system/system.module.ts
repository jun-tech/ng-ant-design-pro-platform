import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LogListComponent } from './log/log-list/log-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SystemRoutingModule
  ],
  declarations: [UserListComponent, UserInfoComponent, HomeComponent, LogListComponent]
})
export class SystemModule { }
