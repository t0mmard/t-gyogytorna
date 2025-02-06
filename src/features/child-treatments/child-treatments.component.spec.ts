import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTreatmentsComponent } from './child-treatments.component';

describe('ChildTreatmentsComponent', () => {
  let component: ChildTreatmentsComponent;
  let fixture: ComponentFixture<ChildTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTreatmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
