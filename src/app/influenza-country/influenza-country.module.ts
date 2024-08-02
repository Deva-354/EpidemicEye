import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InfluenzaCountryRoutingModule } from './influenza-country-routing.module';
import { InfluenzaCountryPageComponent } from './influenza-components/influenza-country-page/influenza-country-page.component';
import { InfluenzaDataTableComponent } from './influenza-components/influenza-data-table/influenza-data-table.component';


@NgModule({
  declarations: [
    InfluenzaCountryPageComponent,
    InfluenzaDataTableComponent
  ],
  imports: [
    CommonModule,
    InfluenzaCountryRoutingModule,
    NgxChartsModule
  ]
})
export class InfluenzaCountryModule { }
