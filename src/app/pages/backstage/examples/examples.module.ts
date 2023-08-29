import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './examples-routing.module';
import { NgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { ListSearchComponent } from './list/list-search/list-search.component';
import { BasicListComponent } from './list/basic-list/basic-list.component';
import { ChartPipeComponent } from './chart/chart-pipe/chart-pipe.component';
// import { ComponentCoreModule } from 'src/app/components/component-core.module';
import { NzDemoLayoutSideComponent } from './layout/layout-side.component';
import { LayoutContentComponent } from './layout/layout-content/layout-content.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    // ComponentCoreModule,
    ExamplesRoutingModule
  ],
  declarations: [ListSearchComponent, BasicListComponent, ChartPipeComponent, NzDemoLayoutSideComponent, LayoutContentComponent]
})
export class ExamplesModule { }
