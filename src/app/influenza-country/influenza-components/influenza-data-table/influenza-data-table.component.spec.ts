import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaDataTableComponent } from './influenza-data-table.component';

describe('InfluenzaDataTableComponent', () => {
  let component: InfluenzaDataTableComponent;
  let fixture: ComponentFixture<InfluenzaDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenzaDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenzaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
