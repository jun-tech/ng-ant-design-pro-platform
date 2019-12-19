import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/models/core/menuItem';

import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../core/local-storage.service';
import { ServiceResult } from 'src/app/models/core/service-result';

@Injectable({
  providedIn: 'root'
})
export class PlatformCoreService {

  constructor(private http: HttpClient, private store: LocalStorageService) { }

  /**
   * 获取桌面
   */
  getDesktop(): { title: string, module: string, power: string, isSelect: boolean } {
    const tabItem = { title: '工作桌面', module: '/system/home', power: '', isSelect: true };
    return tabItem;
  }

  /**
   * 获取菜单
   */
  getMenuResource(): Array<MenuItem> {
    const tabItemList: Array<MenuItem> = [];
    let tabItem = new MenuItem();
    tabItem.label = '工作桌面';
    tabItem.module = '/system/home';
    tabItem.icon = 'home';
    tabItemList.push(tabItem);

    tabItem = new MenuItem();
    tabItem.label = '列表页';
    tabItem.icon = 'table';
    tabItem.isGroup = true;
    // 常用统计
    let subTabItem = new MenuItem();
    subTabItem.label = '查询列表';
    subTabItem.module = '/examples/list/list-search';
    tabItem.children.push(subTabItem);

    subTabItem = new MenuItem();
    subTabItem.label = '标准列表';
    subTabItem.module = '/examples/list/basic-list';
    tabItem.children.push(subTabItem);
    tabItemList.push(tabItem);

    // 常用统计
    tabItem = new MenuItem();
    tabItem.label = '常用统计';
    tabItem.icon = 'area-chart';
    tabItem.isGroup = true;

    subTabItem = new MenuItem();
    subTabItem.label = '饼图';
    subTabItem.module = '/examples/chart/chart-pipe';
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
  login(callback: Function, userName: string, password: string, verfiyCode: string): void {
    const sr = new ServiceResult();
    this.http.post('auth/login', 'userName=' + userName).subscribe(res => {
      // 模拟逻辑
      if (userName !== 'admin') {
        sr.errorCode = -1;
        sr.errorMsg = '帐号或密码错误';
        return;
      }
      const token = res['token'];
      this.store.set('token', token);
      callback.call(this, sr);
    });
  }

  /**
   * 退出
   */
  logout(callback: Function): void {
    this.http.post('auth/logout', null).subscribe(res => {
      this.store.clearAll();
      callback.call(this);
    });
  }

  /**
   * 获取用户信息
   */
  getUserInfo(): void {

  }

}
