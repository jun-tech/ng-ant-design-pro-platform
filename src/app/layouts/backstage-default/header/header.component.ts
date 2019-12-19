import { Component, OnInit, Input } from '@angular/core';
import { PlatformCoreService } from 'src/app/services/platform/platform-core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() isCollapsed: boolean;

  constructor(private router: Router, private platformCoreService: PlatformCoreService) { }

  ngOnInit() {
  }

  logout(): void {
    const { router } = this;
    this.platformCoreService.logout(() => {
      router.navigateByUrl('/account/login');
    });
  }
}
