import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwarenessPageComponent } from './components/awareness-page/awareness-page.component';

const routes: Routes = [
  { path: '', component: AwarenessPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwarenessRoutingModule { }
