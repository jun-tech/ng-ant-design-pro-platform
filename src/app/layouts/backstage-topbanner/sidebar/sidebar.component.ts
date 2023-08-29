import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/core/menuItem';
import { PlatformCoreService } from 'src/app/services/platform/platform-core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {


  @Input() isCollapsed: boolean;
  @Output() isCollapsedChange = new EventEmitter<boolean>();

  isShow: boolean;

  /**
   * 菜单资源
   */
  menuResource: Array<MenuItem> = [];

  constructor(private platformCoreService: PlatformCoreService, private router: Router) { }

  ngOnInit() {
    this.platformCoreService.getMenuResource(this.menuResource);
  }

  // 是否选中菜单
  isSelected(module: string): boolean {
    const u = this.router.url;
    return module === u;
  }

  // 是否展开菜单
  isOpen(menuItems: MenuItem[]): boolean {
    const u = this.router.url;
    const foucusMenu = menuItems.find(menuItem => menuItem.module === u);
    const isOpen = foucusMenu != null ? true : false;
    return isOpen;
  }

}
