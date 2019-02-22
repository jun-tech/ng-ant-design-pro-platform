import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ErrorUnkonwComponent } from './error-unkonw/error-unkonw.component';
import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ],
  declarations: [ErrorNotFoundComponent, ErrorUnkonwComponent]
})
export class ErrorsModule { }
