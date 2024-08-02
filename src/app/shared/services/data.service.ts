import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private csvFilePath = 'assets/data.csv'; // Path to your CSV file

  constructor(private http: HttpClient) {}

  getCSVData(): Observable<any> {
    return new Observable(observer => {
      this.http.get(this.csvFilePath, { responseType: 'text' }).subscribe(data => {
        Papa.parse(data, {
          header: true,
          complete: (result) => {
            observer.next(result.data);
            observer.complete();
          },
          error: (error: any) => { // Explicitly type 'error' as 'any'
            observer.error(error);
          }
        });
      });
    });
  }
}



