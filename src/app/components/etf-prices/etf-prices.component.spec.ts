import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfPricesComponent } from './etf-prices.component';

describe('EtfPricesComponent', () => {
  let component: EtfPricesComponent;
  let fixture: ComponentFixture<EtfPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtfPricesComponent]
    });
    fixture = TestBed.createComponent(EtfPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
