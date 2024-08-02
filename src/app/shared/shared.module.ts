import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent} from './componenets/sidebar/sidebar.component';
import { TopbarComponent } from './componenets/topbar/topbar.component';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './componenets/search/search.component';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChartModule,
    HighchartsChartModule,
    NgxChartsModule
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent,
 
  ]
})
export class SharedModule { }