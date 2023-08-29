import { NgModule, ModuleWithProviders } from '@angular/core';
import { G2CardModule } from './g2-card/g2-card.module';
import { G2MiniAreaModule } from './g2-mini-area/g2-mini-area.module';
import { G2MiniBarModule } from './g2-mini-bar/g2-mini-bar.module';
import { G2MiniProgressModule } from './g2-mini-progress/g2-mini-progress.module';
import { TrendModule } from './trend/trend.module';

const COMPONENTS_CORE = [
  G2CardModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  TrendModule
];

@NgModule({
  exports: [...COMPONENTS_CORE],
  imports: [...COMPONENTS_CORE]
})
export class ComponentCoreModule {
  static forRoot(): ModuleWithProviders<ComponentCoreModule> {
    return {
      ngModule: ComponentCoreModule,
      providers: [],
    };
  }
}
