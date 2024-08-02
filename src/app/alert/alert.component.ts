import { Component } from '@angular/core';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  constructor(private alertService: AlertService) {}

  triggerCovidAlert(): void {
    this.alertService.triggerRandomCovidAlert();
    const covidAlertMessage = 'COVID-19 alert triggered.';
    this.alertService.sendAlertToOfficials(covidAlertMessage);
  }

  triggerInfluenzaAlert(): void {
    this.alertService.triggerRandomInfluenzaAlert();
    const influenzaAlertMessage = 'Influenza alert triggered.';
    this.alertService.sendAlertToOfficials(influenzaAlertMessage);
  }
}