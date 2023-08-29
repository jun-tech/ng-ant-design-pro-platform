import { NgModule } from '@angular/core';
import { G2MiniAreaComponent } from './g2-mini-area.component';
import { CommonModule } from '@angular/common';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [G2MiniAreaComponent],
  exports: [
    G2MiniAreaComponent
  ],
  imports: [CommonModule]
})
export class G2MiniAreaModule { }
