import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
selector: 'app-summary-page',
templateUrl: './summary-page.component.html',
styleUrls: ['./summary-page.component.css']
})

export Class SummaryPageComponent implements OnInit {
    covidData: any = {}:

    constructor(private dataService: DataService){}

    ngOnInit(): void {
        this.dataService.getSummaryData()
         .subscribe(
            //any data can be here so we are writing any temporaririly
            (data:any) => {
                this.covidData = data;
                console.log('Summary Data, data');
            }

            ); 
    }
}