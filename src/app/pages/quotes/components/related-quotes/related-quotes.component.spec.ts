import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedQuotesComponent } from './related-quotes.component';

describe('RelatedQuotesComponent', () => {
  let component: RelatedQuotesComponent;
  let fixture: ComponentFixture<RelatedQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
