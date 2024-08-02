import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaConfirmedByCountriesComponent } from './influenza-confirmed-by-countries.component';

describe('InfluenzaConfirmedByCountriesComponent', () => {
  let component: InfluenzaConfirmedByCountriesComponent;
  let fixture: ComponentFixture<InfluenzaConfirmedByCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenzaConfirmedByCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenzaConfirmedByCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
