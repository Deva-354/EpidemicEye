import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaLivePageComponent } from './influenza-live-page.component';

describe('InfluenzaLivePageComponent', () => {
  let component: InfluenzaLivePageComponent;
  let fixture: ComponentFixture<InfluenzaLivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenzaLivePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenzaLivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
