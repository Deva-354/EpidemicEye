import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-influenza-data-table',
  templateUrl: './influenza-data-table.component.html',
  styleUrl: './influenza-data-table.component.css'
})
export class InfluenzaDataTableComponent implements OnInit, OnChanges, OnDestroy{

  @Input() data: any;
  countries: any[] = [];

  subscription = new Subscription

  constructor()  { }

  ngOnInit(): void {
  
    
  }

  ngOnChanges(): void {
    this.countries = this.data?.Countries;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}