import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { LogListComponent } from './log/log-list/log-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: '工作台' } },
  { path: 'user-list', component: UserListComponent, data: { title: '用户管理' } },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'log-list', component: LogListComponent, data: { title: '审计日志'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
