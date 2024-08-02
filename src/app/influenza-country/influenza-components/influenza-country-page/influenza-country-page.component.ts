import { Component, OnInit } from '@angular/core';
import { InfluenzaDataService } from '../../../shared/services/influenza-data.service';
// import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-influenza-country-page',
  templateUrl: './influenza-country-page.component.html',
  styleUrl: './influenza-country-page.component.css'
})
export class InfluenzaCountryPageComponent {
  data: any;

  constructor(
    private influenzaDataService: InfluenzaDataService,
  ) {}

  ngOnInit(): void {
    this.influenzaDataService.getCSVData() // Assuming getCSVData is your method to fetch CSV data
      .subscribe(
        (data: any) => {
          this.data = this.transformData(data); // Process the data as needed
          console.log('Influenza Data:', this.data); // Debug statement
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
}
//   searchCountry(country: string): void {
//     if (!this.data || !this.data.Countries) return;

//     const filteredCountries = this.data.Countries
//       .filter((c: any) =>
//         c.Country.toLowerCase().includes(country.toLowerCase())
//       );

//     this.searchService.setCountries(filteredCountries);
//   }
// }

