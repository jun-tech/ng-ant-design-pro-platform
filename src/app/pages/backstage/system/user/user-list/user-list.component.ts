import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
// import * as G2 from '@antv/g2';
declare var G2: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'app';
  version = '';
  visitData = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.chartData();
  }

  chartData() {

    this.http.post('charts/visitdata', null).pipe(delay(2000)).subscribe(res => {
      this.visitData = res['data'];
    });

  }
}
