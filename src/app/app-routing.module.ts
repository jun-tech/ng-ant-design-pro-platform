import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackstageDefaultComponent } from './layouts/backstage-default/backstage-default.component';
import { RouterGuardService } from './services/core/router-guard.service';

const routes: Routes = [
  // 前台模块
  {
    path: 'frontstage',
    loadChildren: './pages/frontstage/frontstage.module#FrontStageModule',
  },
  // 帐户登录、注册、找回密码等界面
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountModule',
  },
  // 后台模块
  {
    path: '',
    component: BackstageDefaultComponent,
    canActivate: [RouterGuardService],
    children: [
      { path: '', redirectTo: 'system/home', pathMatch: 'full' },
      {
        path: 'examples',
        loadChildren: './pages/backstage/examples/examples.module#ExamplesModule'
      },
      {
        path: 'system',
        loadChildren: './pages/backstage/system/system.module#SystemModule'
      },
      { path: 'exception', loadChildren: './pages/commons/exception/exception.module#ExceptionModule' },
    ]
  },
  // Exception
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
