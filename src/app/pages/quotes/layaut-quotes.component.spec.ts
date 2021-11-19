import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayautQuotesComponent } from './layaut-quotes.component';

describe('LayautQuotesComponent', () => {
  let component: LayautQuotesComponent;
  let fixture: ComponentFixture<LayautQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayautQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayautQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
