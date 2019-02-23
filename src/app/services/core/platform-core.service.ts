import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/modes/core/menuItem';

@Injectable({
  providedIn: 'root'
})
export class PlatformCoreService {

  constructor() { }

  /**
   * 获取桌面
   */
  getDesktop(): { title: string, module: string, power: string, isSelect: boolean } {
    const tabItem = { title: '工作桌面', module: '/backstage/system/home', power: '', isSelect: true };
    return tabItem;
  }

  /**
   * 获取菜单
   */
  getMenuResource(): Array<MenuItem> {
    const tabItemList: Array<MenuItem> = [];
    let tabItem = new MenuItem();
    tabItem.label = '工作桌面';
    tabItem.module = '/backstage/system/home';
    tabItem.icon = 'home';
    tabItemList.push(tabItem);

    tabItem = new MenuItem();
    tabItem.label = '列表页';
    tabItem.icon = 'table';
    tabItem.isGroup = true;
    // 常用统计
    let subTabItem = new MenuItem();
    subTabItem.label = '查询列表';
    subTabItem.module = '/backstage/examples/list-search';
    tabItem.children.push(subTabItem);

    subTabItem = new MenuItem();
    subTabItem.label = '标准列表';
    subTabItem.module = '/backstage/examples/basic-list';
    tabItem.children.push(subTabItem);
    tabItemList.push(tabItem);

     // 常用统计
    tabItem = new MenuItem();
    tabItem.label = '常用统计';
    tabItem.icon = 'area-chart';
    tabItem.isGroup = true;

    subTabItem = new MenuItem();
    subTabItem.label = '饼图';
    subTabItem.module = '/backstage/examples/chart-pipe';
    tabItem.children.push(subTabItem);
    tabItemList.push(tabItem);

    tabItem = new MenuItem();
    tabItem.label = '系统管理';
    tabItem.icon = 'setting';
    tabItem.isGroup = true;
    // 系统下级-用户管理
    subTabItem = new MenuItem();
    subTabItem.label = '用户管理';
    subTabItem.module = '/backstage/system/user-list';
    tabItem.children.push(subTabItem);

    // subTabItem = new MenuItem();
    // subTabItem.label = '部门管理';
    // subTabItem.module = '/system/home';
    // tabItem.children.push(subTabItem);

    subTabItem = new MenuItem();
    subTabItem.label = '审计日志';
    subTabItem.module = '/backstage/system/log-list';
    tabItem.children.push(subTabItem);

    tabItemList.push(tabItem);

    return tabItemList;
  }

  /**
   * 获取通知
   */
  getNotifyMessage(): void {

  }

  /**
   * 登录
   */
  login(): void {

  }

  /**
   * 退出
   */
  logout(): void {

  }

  /**
   * 获取用户信息
   */
  getUserInfo(): void {

  }

}
