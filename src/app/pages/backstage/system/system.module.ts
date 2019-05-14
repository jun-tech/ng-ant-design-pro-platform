import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ComponentCoreModule } from 'src/app/components/component-core.module';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SystemRoutingModule,
    ComponentCoreModule
  ],
  declarations: [HomeComponent]
})
export class SystemModule { }
