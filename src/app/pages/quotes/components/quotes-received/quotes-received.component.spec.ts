import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesReceivedComponent } from './quotes-received.component';

describe('QuotesReceivedComponent', () => {
  let component: QuotesReceivedComponent;
  let fixture: ComponentFixture<QuotesReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
