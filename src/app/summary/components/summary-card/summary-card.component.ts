import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnChanges {
  @Input() covidData: any;
  summaryData: any = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['covidData'] && this.covidData) {
      this.summaryData = this.covidData.Global;
      console.log('Updated Summary Data:', this.summaryData); // Debug statement
    }
  }
}


