import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart-pipe',
  templateUrl: './chart-pipe.component.html',
  styleUrls: ['./chart-pipe.component.less']
})
export class ChartPipeComponent implements OnInit {

  loading2 = true;
  saleTrendData = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.http.post('charts/saleTrend', null).pipe(delay(2000)).subscribe(res => {
      // 使用类型断言将对象断言为具有 'name' 属性的类型
      const resObj = (res as { data: Object });
      this.saleTrendData = resObj.data;
      this.loading2 = false;
    });
  }

}
