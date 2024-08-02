import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluenzaSummaryPageComponent } from './influenza-components/influenza-summary-page/influenza-summary-page.component';

const routes: Routes = [
  {path: '',component:InfluenzaSummaryPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluenzaSummaryRoutingModule { }
