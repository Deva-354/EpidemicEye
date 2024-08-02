import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse';
import { Observable, of } from 'rxjs';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class InfluenzaDataService {
  private dataUrl = 'assets/data_2.csv'
  private csvFilePath = 'assets/data_2.csv'; // Path to your CSV file

  constructor(private http: HttpClient) {}

  getCSVData(): Observable<any> {
    return new Observable(observer => {
      this.http.get(this.dataUrl, { responseType: 'text' }).subscribe(data => {
        Papa.parse(data, {
          header: true,
          complete: (result) => {
            observer.next(result.data);
            observer.complete();
          },
          error: (error: any) => { 
            observer.error(error);
          }
        });
      });
    });
  }

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