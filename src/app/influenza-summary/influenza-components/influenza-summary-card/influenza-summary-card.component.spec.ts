import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaSummaryCardComponent } from './influenza-summary-card.component';

describe('InfluenzaSummaryCardComponent', () => {
  let component: InfluenzaSummaryCardComponent;
  let fixture: ComponentFixture<InfluenzaSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenzaSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenzaSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
