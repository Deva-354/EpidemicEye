import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new BehaviorSubject<string | null>(null);
  alert$: Observable<string | null> = this.alertSubject.asObservable();

  private covidAlerts: string[] = [
    'Wear a mask in public places to protect yourself and others.',
    'Wash your hands frequently with soap and water for at least 20 seconds.',
    'Maintain a physical distance of at least 6 feet from others.',
    'Avoid crowded and poorly ventilated spaces.',
    'If you feel unwell, stay at home and consult a healthcare provider.',
    'Get vaccinated to help prevent the spread of COVID-19.',
    'Use hand sanitizer with at least 60% alcohol if soap and water are not available.',
    'Cover your mouth and nose with a tissue or your elbow when you cough or sneeze.',
    'Monitor your health for symptoms of COVID-19 and get tested if necessary.'
  ];

  private influenzaAlerts: string[] = [
    'Influenza is spreading rapidly. Avoid close contact with others.',
    'Get your flu shot to protect yourself and others from influenza.',
    'If you have flu symptoms, stay home and avoid contact with others.',
    'Practice good hygiene to reduce the spread of influenza.',
    'Wash your hands regularly and use hand sanitizer.',
    'Cover your nose and mouth with a tissue when you cough or sneeze.',
    'Stay hydrated and rest if you are experiencing flu symptoms.',
    'Seek medical advice if your flu symptoms worsen or persist.'
  ];

  constructor(private snackBar: MatSnackBar) {}

  triggerAlert(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
    this.alertSubject.next(message);
  }

  clearAlert(): void {
    this.alertSubject.next(null);
  }

  sendAlertToOfficials(message: string): void {
    // Implement the logic to send alert to officials
    console.log('Alert sent to officials:', message);
  }

  triggerRandomCovidAlert(): void {
    const randomIndex = Math.floor(Math.random() * this.covidAlerts.length);
    const alertMessage = this.covidAlerts[randomIndex];
    this.triggerAlert(alertMessage);
  }

  triggerRandomInfluenzaAlert(): void {
    const randomIndex = Math.floor(Math.random() * this.influenzaAlerts.length);
    const alertMessage = this.influenzaAlerts[randomIndex];
    this.triggerAlert(alertMessage);
  }
}



