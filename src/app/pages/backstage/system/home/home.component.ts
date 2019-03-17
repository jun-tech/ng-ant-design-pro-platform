import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  loading = true;

  visitData = {};

  totalSalePrecent = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post('charts/visitdata', null).pipe(delay(2000)).subscribe(res => {
      this.visitData = res['data'];
      this.loading = false;
    });

    this.http.post<number>('charts/totalSalePrecent', null).subscribe(res => {
      this.totalSalePrecent = res;
    });

  }

}
