import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/serivces/core/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private store: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(): void {
    this.store.set('username', this.username);
    this.router.navigateByUrl('/system/home');
  }
}
