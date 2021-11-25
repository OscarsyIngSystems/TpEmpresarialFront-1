import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablePaymentComponent } from './variable-payment.component';

describe('VariablePaymentComponent', () => {
  let component: VariablePaymentComponent;
  let fixture: ComponentFixture<VariablePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariablePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
