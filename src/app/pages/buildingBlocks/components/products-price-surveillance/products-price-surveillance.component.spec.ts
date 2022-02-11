import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPriceSurveillanceComponent } from './products-price-surveillance.component';

describe('ProductsPriceSurveillanceComponent', () => {
  let component: ProductsPriceSurveillanceComponent;
  let fixture: ComponentFixture<ProductsPriceSurveillanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPriceSurveillanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPriceSurveillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
