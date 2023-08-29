import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2MiniBarComponent } from './g2-mini-bar.component';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [G2MiniBarComponent],
  exports: [
    G2MiniBarComponent
  ],
  imports: [CommonModule]
})
export class G2MiniBarModule { }
