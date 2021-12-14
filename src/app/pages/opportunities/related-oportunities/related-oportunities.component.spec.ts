import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedOportunitiesComponent } from './related-oportunities.component';

describe('RelatedOportunitiesComponent', () => {
  let component: RelatedOportunitiesComponent;
  let fixture: ComponentFixture<RelatedOportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedOportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedOportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
