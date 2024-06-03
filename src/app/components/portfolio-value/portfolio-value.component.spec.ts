import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioValueComponent } from './portfolio-value.component';

describe('PortfolioValueComponent', () => {
  let component: PortfolioValueComponent;
  let fixture: ComponentFixture<PortfolioValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioValueComponent]
    });
    fixture = TestBed.createComponent(PortfolioValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
