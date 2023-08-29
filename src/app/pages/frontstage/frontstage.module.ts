import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontStageRoutingModule } from './frontstage-routing.module';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/core/local-storage.service';
// import { ComponentCoreModule } from 'src/app/components/component-core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    // ComponentCoreModule,
    FrontStageRoutingModule
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class FrontStageModule { }
