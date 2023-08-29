import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { PlatformCoreService } from 'src/app/services/platform/platform-core.service';
import { AppReuseStrategy } from 'src/app/services/core/app-reuse-strategy';

@Component({
  selector: 'app-reuse-tab',
  templateUrl: './reuse-tab.component.html',
  styleUrls: ['./reuse-tab.component.less']
})
export class ReuseTabComponent {

  /**
   * 当前选中的tab
   */
  currentIndex = -1;

  /**
   * 当前鼠标经过的tab
   */
  currentOverIndex = -1;

  /**
   * tab实际容器宽度
   */
  tabRealWidth: any;

  /**
   * 侧边栏宽度
   */
  sidebarWidth: 256;

  /**
   * tab改变时发送回值给外部使用
   */
  @Output() changeTabSize: EventEmitter<number> = new EventEmitter();

  /**
   * 所有缓存的tabItem
   */
  tabItemList: Array<{ title: string, module: string, power: string, isSelect: boolean }> = [];

  /**
   * 显示tabItem
   */
  tabItemShowList: Array<{ title: string, module: string, power: string, isSelect: boolean }> = [];

  /**
   * 折叠菜单
   */
  tabItemCollapsedList: Array<{ title: string, module: string, power: string, isSelect: boolean }> = [];

  /**
   * 是否显示折叠
   */
  isCollapsedTab: boolean;

  constructor(
    private hst: ElementRef,
    private platformCoreService: PlatformCoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {

    // 首页设置
    const firstUrl: { title: string, module: string, power: string, isSelect: boolean } = this.platformCoreService.getDesktop();
    this.tabItemList.push(firstUrl);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(routeData => {
        // 路由data的标题
        const url = this.router.url;
        this.titleService.setTitle(routeData['title']); // 设置网页标题
        const exitMenu = this.tabItemList.find(p => p.module === url);
        if (!exitMenu) { // 缓存路由不存在添加
          this.tabItemList.push({ title: routeData['title'], module: url, power: '', isSelect: true });
          this.tabResize(this.sidebarWidth);
        }
        // 设置选中
        this.tabItemList.forEach(p => p.isSelect = p.module === url);
        this.currentIndex = this.tabItemList.findIndex(p => p.module === url);
      });
  }

  // 关闭选项标签
  closeTab(module: string, isSelect: boolean, event: Event): void {
    event.preventDefault();
    // 当前关闭的是第几个路由
    const index = this.tabItemList.findIndex(p => p.module === module);
    // 只有一个不可以删
    if (this.tabItemList.length === 1) { return; }
    // 删除复用
    delete AppReuseStrategy.deleteRouteSnapshot[module];
    if (!isSelect) { return; }
    // 关闭当前显示后一个
    let menu = this.tabItemList[index + 1];
    if (!menu) {// 若上一个没有，显示下一个
      menu = this.tabItemList[index - 1];
    }
    // 设置选中并重新生成tabItemList
    this.tabItemList.forEach(p => p.isSelect = p.module === menu.module);
    this.tabItemList = this.tabItemList.filter(p => p.module !== module);
    // 显示当前路由信息
    this.router.navigate(['/' + menu.module]);
    this.tabResize(this.sidebarWidth);
  }

  /**
   * 重置tab大小
   * @param sw 侧边栏宽度
   */
  tabResize(sw?: any): void {
    // 初始化变量
    const winWidth = document.body.offsetWidth;
    this.sidebarWidth = sw !== undefined ? sw : 256;
    const sidebarCollapsedWidth = 68;
    const headerWidth = 270; // 头部限制宽度
    const menuDrapDownWidth = 38; // 折叠tab
    const tabItemWidth = 96;
    const tabMaxWidth = winWidth - this.sidebarWidth - sidebarCollapsedWidth - headerWidth - 2; // 这里扣多2像素，貌似有些浏览器有问题
    this.tabRealWidth = tabMaxWidth - menuDrapDownWidth; // tab的实际容器宽度
    // this.hst.nativeElement.style.width = tabMaxWidth + 'px'; // 重设宿主组件的宽度
    this.changeTabSize.emit(tabMaxWidth); // 向外发送计算好的值事件
    // 重新显示tab
    const tabMaxNum = Math.floor(this.tabRealWidth / tabItemWidth);
    let tabNum = this.tabItemList.length > tabMaxNum ? tabMaxNum : this.tabItemList.length;
    if (tabNum < 0) {
      tabNum = 0;
    }
    // 清空重新赋值
    this.tabItemShowList = this.tabItemList.slice(0, tabNum);
    this.tabItemCollapsedList = this.tabItemList.slice(tabNum);
    // 显示折叠tab
    if (this.tabItemList.length > tabNum) {
      this.isCollapsedTab = true;
    } else {
      this.isCollapsedTab = false;
    }
  }

  tabItemShowSelect(ev: any, index: number): void {
    this.currentIndex = index;
    const menu = this.tabItemShowList[this.currentIndex];
    // 跳转路由
    this.router.navigate([menu.module]);
  }

  tabItemCollapsedSelect(ev: any, index: number): void {
    this.currentIndex = index;
    const menu = this.tabItemCollapsedList[this.currentIndex];
    // 跳转路由
    this.router.navigate([menu.module]);
  }

  /**
   * 显示关闭
   */
  showClose(tabItem: string, i: number): void {
    if (i === 0 && tabItem === '__tabItemShow') { return; }// 第一个不允许删除
    this.currentOverIndex = i;
    document.getElementById(tabItem + i).style.display = 'inline-block';
  }

  /**
   * 隐藏关闭
   */
  hideClose(tabItem: string, i: number): void {
    this.currentOverIndex = i;
    document.getElementById(tabItem + i).style.display = 'none';
  }


}
