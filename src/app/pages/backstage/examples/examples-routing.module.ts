import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSearchComponent } from './list-search/list-search.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { ChartPipeComponent } from './chart-pipe/chart-pipe.component';


const routes: Routes = [
  { path: 'list-search', component: ListSearchComponent, data: { title: '查询列表', reuse: true } },
  { path: 'basic-list', component: BasicListComponent, data: { title: '标准列表', reuse: true } },
  { path: 'chart-pipe', component: ChartPipeComponent, data: { title: '饼图', reuse: true } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExamplesRoutingModule { }
