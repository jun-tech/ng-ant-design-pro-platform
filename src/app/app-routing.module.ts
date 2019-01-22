import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackstageDefaultComponent } from './layout/backstage-default/backstage-default.component';
import { ErrorUnkonwComponent } from './pages/errors/error-unkonw/error-unkonw.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontstage/login', pathMatch: 'full' },
  // 默认页
  // { path: '', redirectTo: '/system/user-list', pathMatch: 'full' },
  // 前台模块（无权限验证）
  {
    path: 'frontstage',
    loadChildren: './pages/frontstage/frontstage.module#FrontStageModule'
  },
  // 系统模块
  {
    path: 'system', component: BackstageDefaultComponent,
    loadChildren: './pages/system/system.module#SystemModule'
  },
  { path: '**', component: ErrorUnkonwComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
