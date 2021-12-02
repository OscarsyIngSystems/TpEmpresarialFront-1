import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQuotesComponent } from './dialog-quotes.component';

describe('DialogQuotesComponent', () => {
  let component: DialogQuotesComponent;
  let fixture: ComponentFixture<DialogQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
