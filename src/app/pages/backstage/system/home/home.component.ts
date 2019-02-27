import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  loading = true;

  data: any = {};

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.data['visitData'] = [{
      x: '2019-02-19',
      y: 10
    }, {
      x: '2019-02-20',
      y: 14
    }, {
      x: '2019-02-21',
      y: 15
    }, {
      x: '2019-02-22',
      y: 14
    }, {
      x: '2019-02-23',
      y: 13
    }, {
      x: '2019-02-24',
      y: 18
    }, {
      x: '2019-02-25',
      y: 30
    }, {
      x: '2019-02-26',
      y: 20
    }, {
      x: '2019-02-27',
      y: 70
    }];
  }

}
