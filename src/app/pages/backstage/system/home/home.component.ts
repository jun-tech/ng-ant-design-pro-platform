import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { fromEvent, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { NzTabComponent } from 'ng-zorro-antd';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

declare var G2: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {


  loading = true;
  loading2 = true;

  visitData = {};

  saleTrendData = {};

  totalSalePrecent = 0;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    this.http.post('charts/visitdata', null).pipe(delay(2000)).subscribe(res => {
      this.visitData = res['data'];
      this.loading = false;
    });

    this.http.post<number>('charts/totalSalePrecent', null).subscribe(res => {
      this.totalSalePrecent = res;
    });

    this.http.post('charts/saleTrend', null).pipe(delay(2000)).subscribe(res => {
      this.saleTrendData = res['data'];
      this.loading2 = false;
    });

  }

  saleTabChange(nzSelectedIndex: number, tab: NzTabComponent) {
    debugger
    this.cdr.detectChanges();
  }

}
