import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exception-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.css']
})
export class Exception404Component implements OnInit {

  constructor(private titleService: Title, modalSrv: NzModalService) {
    this.titleService.setTitle('404异常');
    modalSrv.closeAll();
  }

  ngOnInit() {
  }

}
