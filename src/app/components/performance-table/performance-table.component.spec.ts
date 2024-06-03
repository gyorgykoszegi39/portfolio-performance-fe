import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTableComponent } from './performance-table.component';

describe('PerformanceTableComponent', () => {
  let component: PerformanceTableComponent;
  let fixture: ComponentFixture<PerformanceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceTableComponent]
    });
    fixture = TestBed.createComponent(PerformanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
