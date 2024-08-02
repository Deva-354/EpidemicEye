import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
path: '',
redirectTo: 'summary',
pathMatch: 'full'

  },
  {
    path:'alert',
    loadChildren:() => import('./alert/alert.module').then(m=> m.AlertModule)
  },
  {
    path:'summary',
    loadChildren:() => import('./summary/summary.module').then(m=> m.SummaryModule)
  },
  {
    path:'country',
    loadChildren:() => import('./country/country.module').then(m=> m.CountryModule)
  },
  {
    path:'live',
    loadChildren:() => import('./live/live.module').then(m=> m.LiveModule)
  },
  { 
    path: 'influenza-summary', loadChildren: () => import('./influenza-summary/influenza-summary.module').then(m => m.InfluenzaSummaryModule) 
  },
  { 
    path: 'influenza-country', loadChildren: () => import('./influenza-country/influenza-country.module').then(m => m.InfluenzaCountryModule) 
  },
  { 
    path: 'influenza-live', loadChildren: () => import('./influenza-live/influenza-live.module').then(m => m.InfluenzaLiveModule) 
  },
  {
    path:'awareness', loadChildren: () => import('./awareness/awareness.module').then(m=> m.AwarenessModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
