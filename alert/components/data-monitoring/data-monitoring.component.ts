import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../alert.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-data-monitor',
  templateUrl: './data-monitoring.component.html',
  styleUrls: ['./data-monitoring.component.css']
})
export class DataMonitorComponent implements OnInit, OnDestroy {
  covidData: any;
  influenzaData: any;
  private dataSubscription: Subscription | undefined;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.startDataSimulation();
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  startDataSimulation(): void {
    this.dataSubscription = interval(5000).subscribe(() => {
      this.simulateDataUpdate();
    });
  }

  simulateDataUpdate(): void {
    this.covidData = {
      newCases: this.getRandomNumber(100, 1000),
      newDeaths: this.getRandomNumber(5, 50),
      newRecovered: this.getRandomNumber(100, 800)
    };

    this.influenzaData = {
      newCases: this.getRandomNumber(50, 500),
      newDeaths: this.getRandomNumber(2, 20),
      newRecovered: this.getRandomNumber(50, 400)
    };

    this.checkForSignificantChanges();
  }

  checkForSignificantChanges(): void {
    if (this.covidData.newCases > 500) {
      const alertMessage = `High number of new COVID-19 cases detected: ${this.covidData.newCases}`;
      this.alertService.triggerAlert(alertMessage);
      this.alertService.sendAlertToOfficials(alertMessage);
    }

    if (this.covidData.newDeaths > 20) {
      const alertMessage = `High number of new COVID-19 deaths detected: ${this.covidData.newDeaths}`;
      this.alertService.triggerAlert(alertMessage);
      this.alertService.sendAlertToOfficials(alertMessage);
    }

    if (this.influenzaData.newCases > 200) {
      const alertMessage = `High number of new Influenza cases detected: ${this.influenzaData.newCases}`;
      this.alertService.triggerAlert(alertMessage);
      this.alertService.sendAlertToOfficials(alertMessage);
    }

    if (this.influenzaData.newDeaths > 10) {
      const alertMessage = `High number of new Influenza deaths detected: ${this.influenzaData.newDeaths}`;
      this.alertService.triggerAlert(alertMessage);
      this.alertService.sendAlertToOfficials(alertMessage);
    }
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

