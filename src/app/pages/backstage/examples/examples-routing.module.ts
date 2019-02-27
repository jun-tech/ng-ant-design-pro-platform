import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSearchComponent } from './list/list-search/list-search.component';
import { BasicListComponent } from './list/basic-list/basic-list.component';
import { ChartPipeComponent } from './chart/chart-pipe/chart-pipe.component';


const routes: Routes = [
  { path: 'list/list-search', component: ListSearchComponent, data: { title: '查询列表', reuse: true } },
  { path: 'list/basic-list', component: BasicListComponent, data: { title: '标准列表', reuse: true } },
  { path: 'chart/chart-pipe', component: ChartPipeComponent, data: { title: '饼图', reuse: true } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExamplesRoutingModule { }
