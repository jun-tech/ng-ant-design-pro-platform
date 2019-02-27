import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionRoutingModule } from './exception-routing.module';
import { Exception404Component } from './404/404.component';
import { Exception500Component } from './500/500.component';
import { Exception403Component } from './403/403.component';

@NgModule({
  imports: [
    CommonModule,
    ExceptionRoutingModule
  ],
  declarations: [Exception403Component, Exception404Component, Exception500Component]
})
export class ExceptionModule { }
