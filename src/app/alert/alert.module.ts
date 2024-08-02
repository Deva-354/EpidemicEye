import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertRoutingModule } from './alert-routing.module';
import { DataMonitorComponent } from './components/data-monitoring/data-monitoring.component';

@NgModule({
  declarations: [
    AlertComponent,
    DataMonitorComponent
  ],
  imports: [
    CommonModule,
    AlertRoutingModule
  ]
})
export class AlertModule { }

