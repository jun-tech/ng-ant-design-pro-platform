import { NgModule } from '@angular/core';
import { G2MiniProgressComponent } from './g2-mini-progress.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [G2MiniProgressComponent],
  exports: [
    G2MiniProgressComponent
  ],
  imports: [CommonModule, NgZorroAntdModule]
})
export class G2MiniProgressModule { }
