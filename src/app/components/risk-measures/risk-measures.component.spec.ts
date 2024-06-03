import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskMeasuresComponent } from './risk-measures.component';

describe('RiskMeasuresComponent', () => {
  let component: RiskMeasuresComponent;
  let fixture: ComponentFixture<RiskMeasuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskMeasuresComponent]
    });
    fixture = TestBed.createComponent(RiskMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
