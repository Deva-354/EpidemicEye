import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaCountryChartComponent } from './influenza-country-chart.component';

describe('InfluenzaCountryChartComponent', () => {
  let component: InfluenzaCountryChartComponent;
  let fixture: ComponentFixture<InfluenzaCountryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenzaCountryChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenzaCountryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
