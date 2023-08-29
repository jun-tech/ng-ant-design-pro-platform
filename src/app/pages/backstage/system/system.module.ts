import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { ComponentCoreModule } from 'src/app/components/component-core.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SystemRoutingModule,
    ComponentCoreModule
  ],
  declarations: [HomeComponent, UsersComponent]
})
export class SystemModule { }
