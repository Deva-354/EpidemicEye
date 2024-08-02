import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'] // Corrected styleUrls property
})
export class CountryPageComponent implements OnInit {
  covidData: any;

  constructor(
    private dataService: DataService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.dataService.getCSVData() // Assuming getCSVData is your method to fetch CSV data
      .subscribe(
        (data: any) => {
          this.covidData = this.transformData(data); // Process the data as needed
          console.log('COVID Data:', this.covidData); // Debug statement
        },
        (error: any) => {
          console.error('Error fetching data:', error);
        }
      );
  }

  transformData(data: any): any {
    // Transform the CSV data into the desired format
    // Adjust according to the structure of your CSV data
    return {
      Countries: data.map((item: any) => ({
        Country: item.Country, // Example: match these properties with your CSV columns
        TotalConfirmed: item.TotalConfirmed,
        TotalDeaths: item.TotalDeaths,
        TotalRecovered: item.TotalRecovered
      }))
    };
  }

  searchCountry(country: string): void {
    if (!this.covidData || !this.covidData.Countries) return;

    const filteredCountries = this.covidData.Countries
      .filter((c: any) =>
        c.Country.toLowerCase().includes(country.toLowerCase())
      );

    this.searchService.setCountries(filteredCountries);
  }
}

