import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaSummaryPageComponent } from './influenza-summary-page.component';

describe('InfluenzaSummaryPageComponent', () => {
  let component: InfluenzaSummaryPageComponent;
  let fixture: ComponentFixture<InfluenzaSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenzaSummaryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenzaSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
