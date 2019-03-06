import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  loading = true;

  data = {};

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
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
      this.loading = false;
    }, 2000);

  }

}
