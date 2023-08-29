import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exception-403',
  templateUrl: './403.component.html',
  styleUrls: ['./403.component.css']
})
export class Exception403Component implements OnInit {

  constructor(private titleService: Title, modalSrv: NzModalService) {
    this.titleService.setTitle('403异常');
    modalSrv.closeAll();
  }

  ngOnInit() {
  }

}
