import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluenzaLivePageComponent } from './influenza-components/influenza-live-page/influenza-live-page.component';

const routes: Routes = [
  { path: '', component: InfluenzaLivePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluenzaLiveRoutingModule { }
