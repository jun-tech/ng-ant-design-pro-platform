import { NgModule } from '@angular/core';
import { G2CardComponent } from './g2-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [G2CardComponent],
  exports: [G2CardComponent],
  imports: [CommonModule, NzCardModule, NzSpinModule]
})
export class G2CardModule { }
