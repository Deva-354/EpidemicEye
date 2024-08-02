import { Component, OnInit } from '@angular/core';
import { InfluenzaDataService } from '../../../shared/services/influenza-data.service';
@Component({
  selector: 'app-influenza-summary-page',
  templateUrl: './influenza-summary-page.component.html',
  styleUrls: ['./influenza-summary-page.component.css']
})
export class InfluenzaSummaryPageComponent implements OnInit {
  influenzaData: any = {};

  constructor(private influenzaDataService: InfluenzaDataService) {}


  ngOnInit(): void {
    this.influenzaDataService.getData().then(data => {
      this.influenzaData = this.transformData(data); // Transform the data if necessary
      console.log('CSV Data:', this.influenzaData); // Debug statement
    });
  }

  transformData(data: any): any {
    // Transform the data into the format expected by SummaryCardComponent
    // Example transformation, adjust according to your CSV structure
    return {
      Global: {
        TotalConfirmed: data[0].TotalConfirmed, // Adjust according to your CSV fields
        TotalDeaths: data[0].TotalDeaths,
        TotalRecovered: data[0].TotalRecovered
      }
    };
  }
}