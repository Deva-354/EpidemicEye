import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaCountryPageComponent } from './influenza-country-page.component';

describe('InfluenzaCountryPageComponent', () => {
  let component: InfluenzaCountryPageComponent;
  let fixture: ComponentFixture<InfluenzaCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenzaCountryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenzaCountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
