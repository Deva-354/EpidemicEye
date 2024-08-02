import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//adding a new one here
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SummaryModule } from './summary/summary.module';
import { CountryModule } from './country/country.module';
import { LiveModule } from './live/live.module';
import { InfluenzaSummaryModule } from './influenza-summary/influenza-summary.module';
import { InfluenzaCountryModule } from './influenza-country/influenza-country.module';
import { InfluenzaLiveModule } from './influenza-live/influenza-live.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SummaryModule,
    InfluenzaSummaryModule,
    InfluenzaCountryModule,
    CountryModule,
    LiveModule,
    // InfluenzaLiveModule, - giving error for some reason
    MatSnackBarModule,
    MatToolbarModule,
    NgxChartsModule,
    HttpClientModule,

    //adding forms module
    FormsModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
