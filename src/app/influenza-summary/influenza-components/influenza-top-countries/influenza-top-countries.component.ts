import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-influenza-top-countries',
  templateUrl: './influenza-top-countries.component.html',
  styleUrl: './influenza-top-countries.component.css'
})
export class InfluenzaTopCountriesComponent implements OnInit, OnChanges{

  @Input() data: any[] = []; // Input data is now an array of objects
  topConfirmedCases: any[] = [];
  topConfirmedDeaths: any[] = [];
  topConfirmedRecovered: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0) {
      this.updateTopData();
    }
  }

  private updateTopData(): void {
    // Top 5 confirmed cases
    this.topConfirmedCases = [...this.data]
      .sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed)
      .slice(0, 5);

    // Top 5 deaths
    this.topConfirmedDeaths = [...this.data]
      .sort((a: any, b: any) => b.TotalDeaths - a.TotalDeaths)
      .slice(0, 5);

    // Top 5 recovered cases
    this.topConfirmedRecovered = [...this.data]
      .sort((a: any, b: any) => b.TotalRecovered - a.TotalRecovered)
      .slice(0, 5);

    console.log('Top Confirmed Cases:', this.topConfirmedCases);
    console.log('Top Deaths:', this.topConfirmedDeaths);
    console.log('Top Recovered:', this.topConfirmedRecovered);
  }
}