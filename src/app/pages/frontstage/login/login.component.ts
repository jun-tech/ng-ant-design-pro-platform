import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/core/local-storage.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private store: LocalStorageService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('登录'); // 设置网页标题
  }

  submitForm(): void {
    this.store.set('username', this.username);
    this.router.navigateByUrl('/backstage/system/home');
  }
}
