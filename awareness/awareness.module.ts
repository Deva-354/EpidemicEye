import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwarenessRoutingModule } from './awareness-routing.module';
import { AwarenessPageComponent } from './components/awareness-page/awareness-page.component';


@NgModule({
  declarations: [AwarenessPageComponent],
  imports: [
    CommonModule,
    AwarenessRoutingModule,
  ]
})
export class AwarenessModule { }
