import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfluenzaLiveRoutingModule } from './influenza-live-routing.module';
import { InfluenzaLivePageComponent } from './influenza-components/influenza-live-page/influenza-live-page.component';


@NgModule({
  declarations: [
   
    InfluenzaLivePageComponent
  ],
  imports: [
    CommonModule,
    InfluenzaLiveRoutingModule,
    FormsModule
  ]
})
export class InfluenzaLiveModule { }
