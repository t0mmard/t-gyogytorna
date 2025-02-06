import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultTreatmentsComponent } from './adult-treatments.component';

describe('AdultTreatmentsComponent', () => {
  let component: AdultTreatmentsComponent;
  let fixture: ComponentFixture<AdultTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultTreatmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
