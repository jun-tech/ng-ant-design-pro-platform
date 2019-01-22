import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { ReuseTabComponent } from './reuse-tab/reuse-tab.component';

@Component({
  selector: 'app-backstage-default',
  templateUrl: './backstage-default.component.html',
  styleUrls: ['./backstage-default.component.css']
})
export class BackstageDefaultComponent {

  isCollapsed = false;
  triggerTemplate = null;
  sidebarWidth: any = 256; // 初始值
  tabWidth: any = 0;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  @ViewChild('reuseTab') reuseTab: ReuseTabComponent;

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  collapsedTrigger(): void {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.sidebarWidth = 80;
    } else {
      this.sidebarWidth = 256;
    }
    document.getElementById('__reuseTab').style.display = 'none'; // 主要解决左侧栏收缩完后，再处理事件触发，否则出现界面错误现象
    setTimeout(() => {
      this.reuseTab.tabResize(this.sidebarWidth);
      document.getElementById('__reuseTab').style.display = '';
    }, 200); // 这里的200毫秒指左侧栏收缩时间动画，表示收缩-展开后才触发重用
  }

  tabSize(n: number): void {
    this.tabWidth = n;
  }

}
