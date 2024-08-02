import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaTopCountriesComponent } from './influenza-top-countries.component';

describe('InfluenzaTopCountriesComponent', () => {
  let component: InfluenzaTopCountriesComponent;
  let fixture: ComponentFixture<InfluenzaTopCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenzaTopCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenzaTopCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
