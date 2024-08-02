import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMonitorComponent } from './data-monitoring.component';

describe('DataMonitoringComponent', () => {
  let component: DataMonitorComponent;
  let fixture: ComponentFixture<DataMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
