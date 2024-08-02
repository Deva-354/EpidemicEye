import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {
  private dataUrl = 'assets/data.csv';

  constructor() { }

  getData(): Promise<any[]> {
    return d3.csv(this.dataUrl).then(data => {
      return data.map(d => ({
        country: d['Country'],
        totalConfirmed: +d['TotalConfirmed'],
        totalDeaths: +d['TotalDeaths'],
        totalRecovered: +d['TotalRecovered']
      }));
    });
  }
}