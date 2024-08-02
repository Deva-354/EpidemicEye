import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedByCountriesComponent } from './confirmed-by-countries.component';

describe('ConfirmedByCountriesComponent', () => {
  let component: ConfirmedByCountriesComponent;
  let fixture: ComponentFixture<ConfirmedByCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmedByCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedByCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
