import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontStageRoutingModule } from './frontstage-routing.module';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/core/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    FrontStageRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LocalStorageService]
})
export class FrontStageModule { }
