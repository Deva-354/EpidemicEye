import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';

import { SharedModule } from '../shared/shared.module';
import { ConfirmedByCountriesComponent } from './components/confirmed-by-countries/confirmed-by-countries.component';
import { BaseChartDirective } from 'ng2-charts';
import { TopCountriesComponent } from './components/top-countries/top-countries.component';
import { CountryChartComponent } from '../summary/components/country-chart/country-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardComponent,
    ConfirmedByCountriesComponent,
    TopCountriesComponent,
    CountryChartComponent
    
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedModule,
    NgxChartsModule
    
 
    
  
   
  
  ]
})
export class SummaryModule { }

