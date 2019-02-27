import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';
import { ReuseTabComponent } from './reuse-tab/reuse-tab.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-backstage-default',
  templateUrl: './backstage-default.component.html',
  styleUrls: ['./backstage-default.component.less']
})
export class BackstageDefaultComponent implements OnInit, AfterViewInit {

  isCollapsed = false;
  triggerTemplate = null;
  sidebarWidth: any = 256; // 初始值
  tabWidth: any = 0;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  @ViewChild('reuseTab') reuseTab: ReuseTabComponent;

  constructor(private hst: ElementRef) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    fromEvent(window, 'resize')
      .subscribe((event: any) => {
        this.doLayout();
      });
    // 采用延迟处理，否则会js报ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.doLayout();
    }, 500);
  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  collapsedTrigger(): void {
    // 折叠
    this.isCollapsed = !this.isCollapsed;
    document.getElementById('__reuseTab').style.display = 'none'; // 主要解决左侧栏收缩完后，再处理事件触发，否则出现界面溢出错误现象
    setTimeout(() => {
      if (this.isCollapsed) {
        this.sidebarWidth = 80;
      } else {
        this.sidebarWidth = 256;
      }
      this.reuseTab.tabResize(this.sidebarWidth);
      document.getElementById('__reuseTab').style.display = '';
    }, 200); // 这里的200毫秒指左侧栏收缩时间动画，表示收缩-展开后才触发重用
  }

  tabSize(n: number): void {
    this.tabWidth = n;
  }

  doLayout(): void {
    // 小于四分一 自动收缩
    if (window.innerWidth < 500) {
      this.hst.nativeElement.querySelector('nz-sider').style.display = 'none';
      this.isCollapsed = false;
      this.collapsedTrigger();
    } else if (window.innerWidth < 1000) {
      this.hst.nativeElement.querySelector('nz-sider').style.display = '';
      this.isCollapsed = false;
      this.collapsedTrigger();
    } else {
      this.hst.nativeElement.querySelector('nz-sider').style.display = '';
      this.isCollapsed = true;
      this.collapsedTrigger();
    }
  }
}
