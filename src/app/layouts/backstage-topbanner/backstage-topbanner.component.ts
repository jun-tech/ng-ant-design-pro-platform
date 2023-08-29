import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-backstage-topbanner',
  templateUrl: './backstage-topbanner.component.html',
  styleUrls: ['./backstage-topbanner.component.less']
})
export class BackstageTopbannerComponent implements OnInit {

  isCollapsed = false;
  sidebarWidth: any = 256; // 初始值
  tabWidth: any = 0;

  constructor(private hst: ElementRef) {

  }

  ngOnInit() {

  }

  changeTrigger(): void {
  }

  collapsedTrigger(): void {
    // 折叠
    this.isCollapsed = !this.isCollapsed;
    this.doLayout();
    // G2 bug
    const e = document.createEvent('Event');
    e.initEvent('resize', true, true);
    window.dispatchEvent(e);
  }

  tabSize(n: number): void {
    this.tabWidth = n;
  }

  doLayout(): void {

  }

  private smartDetection(): void {
    if (window.innerWidth < 500) {
      this.hst.nativeElement.querySelector('nz-sider').style.display = 'none';
      this.isCollapsed = true;
    } else if (window.innerWidth < 1000) {
      this.hst.nativeElement.querySelector('nz-sider').style.display = '';
      this.isCollapsed = true;
    } else {
      // this.hst.nativeElement.querySelector('nz-sider').style.display = '';
      // this.isCollapsed = false;
    }
  }

}
