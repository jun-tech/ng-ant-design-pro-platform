import { Component, OnInit } from '@angular/core';
// import * as G2 from '@antv/g2';
declare var G2: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'app';
  data = {};
  chart;
  constructor() { }

  ngOnInit() {
    this.chartData();
  }

  chartData() {
    this.data['visitData'] = [{
      x: '2019-02-19',
      y: 60
    }, {
      x: '2019-02-20',
      y: 90
    }, {
      x: '2019-02-21',
      y: 15
    }, {
      x: '2019-02-22',
      y: 20
    }, {
      x: '2019-02-23',
      y: 30
    }, {
      x: '2019-02-24',
      y: 50
    }, {
      x: '2019-02-25',
      y: 30
    }, {
      x: '2019-02-26',
      y: 100
    }, {
      x: '2019-02-27',
      y: 70
    }];

  }

}
