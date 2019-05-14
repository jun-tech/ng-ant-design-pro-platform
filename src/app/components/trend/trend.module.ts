import { NgModule } from '@angular/core';
import { TrendComponent } from './trend.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TrendComponent],
  exports: [
    TrendComponent
  ],
  imports: [CommonModule, NgZorroAntdModule]
})
export class TrendModule { }
