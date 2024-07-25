import { Component,OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
}) 
export class CountryPageComponent  implements OnInit{
covidData: any;
  constructor(
    private dataService: DataService
    private searchService: SearchService
  ){}
  ngOnInit(): void {
    this.dataService.getSummaryData()
    .subscribe(
      (data:any) =>{
        this.covidData = data;
      }
    );
  }

 searchCountry(country: string){
  const Countries = this.covidData.Countries
    .filter(
      (c:any) => c.Country.toLowerCase().includes(country.toLowerCase())
    );

    this.searchService.setCountries();
 }

}
