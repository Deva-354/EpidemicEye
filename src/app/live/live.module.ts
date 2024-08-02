import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LiveRoutingModule } from './live-routing.module';
import { LivePageComponent } from './components/live-page/live-page.component';


@NgModule({
  declarations: [LivePageComponent],
  imports: [
    CommonModule,
    LiveRoutingModule,
    //adding new one here
    FormsModule
  ]
})
export class LiveModule { }
