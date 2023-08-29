import { NgModule } from '@angular/core';
import { G2MiniProgressComponent } from './g2-mini-progress.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [G2MiniProgressComponent],
  exports: [
    G2MiniProgressComponent
  ],
  imports: [CommonModule, NzToolTipModule]
})
export class G2MiniProgressModule { }
