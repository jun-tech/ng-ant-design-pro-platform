import { Component, OnInit, Input } from '@angular/core';
import { PlatformCoreService } from 'src/app/services/core/platform-core.service';
import { MenuItem } from 'src/app/modes/core/menuItem';
import { NzMenuItemDirective } from 'ng-zorro-antd';
import { debug } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isCollapsed: boolean;

  isShow: boolean;

  /**
   * 菜单资源
   */
  menuResource: Array<MenuItem>;

  constructor(private platformCoreService: PlatformCoreService, private router: Router) { }

  ngOnInit() {
    this.menuResource = this.platformCoreService.getMenuResource();
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
