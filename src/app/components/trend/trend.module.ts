import { NgModule } from '@angular/core';
import { TrendComponent } from './trend.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TrendComponent],
  exports: [
    TrendComponent
  ],
  imports: [CommonModule, NzIconModule]
})
export class TrendModule { }
