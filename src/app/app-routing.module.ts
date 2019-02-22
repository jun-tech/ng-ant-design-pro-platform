import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackstageDefaultComponent } from './layout/backstage-default/backstage-default.component';
import { ErrorUnkonwComponent } from './pages/commons/errors/error-unkonw/error-unkonw.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontstage/login', pathMatch: 'full' },
  // 默认页
  // { path: '', redirectTo: '/system/user-list', pathMatch: 'full' },
  // 前台模块（无权限验证）
  {
    path: 'frontstage',
    loadChildren: './pages/frontstage/frontstage.module#FrontStageModule',
  },
  {
    path: 'backstage',
    component: BackstageDefaultComponent,
    children: [
      {
        path: 'examples',
        loadChildren: './pages/backstage/examples/examples.module#ExamplesModule'
      },
      {
        path: 'system',
        loadChildren: './pages/backstage/system/system.module#SystemModule'
      }
    ]
  },
  // // 例子模块
  // {
  //   path: 'examples', component: BackstageDefaultComponent,
  //   loadChildren: './pages/examples/examples.module#ExamplesModule'
  // },
  // // 系统模块
  // {
  //   path: 'system', component: BackstageDefaultComponent,
  //   loadChildren: './pages/system/system.module#SystemModule'
  // },
  { path: '**', component: ErrorUnkonwComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
