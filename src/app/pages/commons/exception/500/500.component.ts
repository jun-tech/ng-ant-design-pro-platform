import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exception-500',
  templateUrl: './500.component.html',
  styleUrls: ['./500.component.css']
})
export class Exception500Component implements OnInit {

  constructor(private titleService: Title, modalSrv: NzModalService) {
    this.titleService.setTitle('500异常');
    modalSrv.closeAll();
  }

  ngOnInit() {
  }

}
