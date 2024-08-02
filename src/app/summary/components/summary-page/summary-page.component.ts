import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  covidData: any = {};

  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.dataService.getCSVData().subscribe(data => {
      this.covidData = this.transformData(data); // Transform the data if necessary
      console.log('CSV Data:', this.covidData); // Debug statement
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
