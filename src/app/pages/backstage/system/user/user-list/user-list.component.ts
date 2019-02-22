import { Component, OnInit } from '@angular/core';
import * as G2 from '@antv/g2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'app';
  data = {};
  chart;
  graph;
  constructor() { }

  ngOnInit() {
    this.chartData();
  }

  chartData() {
    this.data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ];
    this.chart = new G2.Chart({
      container: 'c1', // 指定图表容器 ID
      width: 600, // 指定图表宽度
      height: 300 // 指定图表高度
    });

    this.chart.source(this.data);
    this.chart.interval().position('genre*sold').color('genre');
    //  渲染图表
    this.chart.render();
  }

}
