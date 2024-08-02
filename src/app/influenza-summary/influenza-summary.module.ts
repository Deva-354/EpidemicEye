import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluenzaSummaryRoutingModule } from './influenza-summary-routing.module';
import { InfluenzaConfirmedByCountriesComponent } from './influenza-components/influenza-confirmed-by-countries/influenza-confirmed-by-countries.component';
import { InfluenzaCountryChartComponent } from './influenza-components/influenza-country-chart/influenza-country-chart.component';
import { InfluenzaSummaryCardComponent } from './influenza-components/influenza-summary-card/influenza-summary-card.component';
import { InfluenzaSummaryPageComponent } from './influenza-components/influenza-summary-page/influenza-summary-page.component';
import { InfluenzaTopCountriesComponent } from './influenza-components/influenza-top-countries/influenza-top-countries.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    InfluenzaConfirmedByCountriesComponent,
    InfluenzaCountryChartComponent,
    InfluenzaSummaryCardComponent,
    InfluenzaSummaryPageComponent,
    InfluenzaTopCountriesComponent
  ],
  imports: [
    CommonModule,
    InfluenzaSummaryRoutingModule,
    NgxChartsModule
  ]
})
export class InfluenzaSummaryModule { }
