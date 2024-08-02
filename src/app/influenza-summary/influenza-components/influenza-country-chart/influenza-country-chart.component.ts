import { Component, OnInit } from '@angular/core';
import { InfluenzaDataService } from '../../../shared/services/influenza-data.service'; // Adjust the path if necessary

@Component({
  selector: 'app-influenza-country-chart',
  templateUrl: './influenza-country-chart.component.html',
  styleUrls: ['./influenza-country-chart.component.css']
})
export class InfluenzaCountryChartComponent implements OnInit {
  data: any[] = [];
  view: [number, number] = [700, 400];

  // options
  showLegend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = false;
  xAxisLabel = '';
  yAxisLabel = 'Total Influenza Cases';
  yScaleMax = 100000; // Adjust this based on expected data range
  yScaleMin = 0;
  yAxisTicks = [0, 20000, 40000, 60000, 80000, 100000];
  barPadding = 2;

  constructor(private influenzaDataService: InfluenzaDataService) { }

  ngOnInit(): void {
    this.influenzaDataService.getData().then(data => {
      this.data = data
        .filter(d => d.country !== 'Global' && d.totalConfirmed >= 100) // Adjust filter as necessary
        .map(d => ({
          name: d.country,
          value: d.totalConfirmed // Adjust as necessary
        }))
        .sort((a, b) => b.value - a.value);
    });
  }
}