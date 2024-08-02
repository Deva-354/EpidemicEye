import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent implements OnInit, OnChanges {
  @Input() covidData: any[] = []; // Input data is now an array of objects
  topConfirmedCases: any[] = [];
  topConfirmedDeaths: any[] = [];
  topConfirmedRecovered: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['covidData'] && this.covidData.length > 0) {
      this.updateTopData();
    }
  }

  private updateTopData(): void {
    // Top 5 confirmed cases
    this.topConfirmedCases = [...this.covidData]
      .sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed)
      .slice(0, 5);

    // Top 5 deaths
    this.topConfirmedDeaths = [...this.covidData]
      .sort((a: any, b: any) => b.TotalDeaths - a.TotalDeaths)
      .slice(0, 5);

    // Top 5 recovered cases
    this.topConfirmedRecovered = [...this.covidData]
      .sort((a: any, b: any) => b.TotalRecovered - a.TotalRecovered)
      .slice(0, 5);

    console.log('Top Confirmed Cases:', this.topConfirmedCases);
    console.log('Top Deaths:', this.topConfirmedDeaths);
    console.log('Top Recovered:', this.topConfirmedRecovered);
  }
}


