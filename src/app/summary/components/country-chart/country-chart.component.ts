import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../../../shared/services/covid-data.service';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit {
  data: any[]=[];
  view: [number, number] = [700, 400];

  // options
  // showLegend = true;
  // showLabels = true;
  // animations = true;
  // xAxis = true;
  // yAxis = true;
  // showYAxisLabel = true;
  // showXAxisLabel = true;
  // xAxisLabel = 'Country';
  // yAxisLabel = 'Total Cases';
  showLegend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = false;
  xAxisLabel = '';
  yAxisLabel = 'Total Cases';
  yScaleMax = 300000;
  yScaleMin = 0;
  yAxisTicks = [0, 100000, 200000, 300000];
  barPadding = 2;

  constructor(private covidDataService: CovidDataService) { }

  ngOnInit(): void {
    this.covidDataService.getData().then(data => {
      this.data = data
      .filter(d => d.country !== 'Global' && d.totalConfirmed >= 100)
      .map(d => ({
        name: d.country,
        value: d.totalConfirmed
      }))
      .sort((a, b) => b.value - a.value);
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
// import * as Highcharts from 'highcharts/highstock';
// import {Chart} from 'angular-highcharts';

// @Component({
//   selector: 'app-country-chart',
//   templateUrl: './country-chart.component.html',
//   styleUrls: ['./country-chart.component.css']
// })
// export class CountryChartComponent implements OnInit {
//   chartOptions: any;
//   highcharts: typeof Highcharts = Highcharts;

//   constructor() { }

//   ngOnInit(): void {
//     this.getLineChart();
//   }

//   getLineChart(){
//     this.chartOptions = {
//       chart: {
//         type : 'spline'
//       },
//       title:{
//         text: 'Monthly average temperatue'
//       },
//       subtitle:{
//         source: 'Source: worldclimate.com'
//       },
//       xAxies: {
//         categories:[
//           'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
//         ]
//       },
//       yAxis:{
//         title:{
//           text:'Temperature °C'
//         }
//       },
//       tooltip:{
//         valueSuffix:'°C'
//       },
//       credits:{
//         enabled:false
//       },
//       navigator:{
//         enabled:false
//       },
//       rangeSelector:{
//         enabled:false
//       },
//       scrollbar:{
//         enabled:false
//       },
//       series:this.chartData
//     }
//   }

//   chartData = [
//     {
//       name: 'Tokyo',
//       data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
//     },
//     {
//       name: 'New York',
//       data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
//     },
//     {
//       name: 'Berlin',
//       data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
//     },
//     {
//       name: 'London',
//       data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
//     }
//   ]
// }

//separate
  // chart=new Chart({
  //   chart: {
  //     type: 'line'
  //   },
  //   title: {
  //     text: 'linechart'
  //   },
  //   credits:{
  //     enabled:false
  //   },
  //   series: [{
  //     type:'line',
  //     name: 'Line 1',
  //     data: [10,20,30,40,50]
  //       }] 
  // });

  // add(){
  //   this.chart.addPoint(Math.floor(Math.random()*10));
  // }

  
  //old code
  // barChartData: ChartDataset<'bar'>[] = [
  //   {
  //     data: [85, 45, 67],
  //     label: 'Series A'
  //   }
  // ];

  // barChartLabels: string[] = ['USA', 'UK', 'Brazil']; // Use string[] for labels
  // barChartOptions: ChartOptions<'bar'> = {
  //   responsive: true
  // };
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

//   constructor() { }

//   ngOnInit(): void {
//   }
  
// }
