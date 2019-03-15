import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PlatformCoreService } from 'src/app/services/platform/platform-core.service';
import { ServiceResult } from 'src/app/models/core/service-result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '123456';

  constructor(
    private router: Router,
    private titleService: Title,
    private platformCoreService: PlatformCoreService) { }

  ngOnInit() {
    this.titleService.setTitle('登录'); // 设置网页标题
  }

  submitForm(): void {
    const { router } = this;
    this.platformCoreService.login(function (sr: ServiceResult) {
      if (sr.errorCode === 0) {
        router.navigateByUrl('/system/home');
      }
    }, this.username, this.password, null);
  }
}
