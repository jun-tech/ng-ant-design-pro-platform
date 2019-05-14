import { NgModule } from '@angular/core';
import { G2CardComponent } from './g2-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [G2CardComponent],
  exports: [G2CardComponent],
  imports: [CommonModule, NgZorroAntdModule]
})
export class G2CardModule { }
