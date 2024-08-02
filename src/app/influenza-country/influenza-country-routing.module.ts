import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluenzaCountryPageComponent } from './influenza-components/influenza-country-page/influenza-country-page.component';

const routes: Routes = [
  { path: '', component: InfluenzaCountryPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluenzaCountryRoutingModule { }
