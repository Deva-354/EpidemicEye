import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-influenza-summary-card',
  templateUrl: './influenza-summary-card.component.html',
  styleUrls: ['./influenza-summary-card.component.css']
})
export class InfluenzaSummaryCardComponent implements OnChanges {
  @Input() influenzaData: any;
  summaryData: any = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['influenzaData'] && this.influenzaData) {
      this.summaryData = this.influenzaData.Global;
      console.log('Updated Summary Data:', this.summaryData); // Debug statement
    }
  }
}
