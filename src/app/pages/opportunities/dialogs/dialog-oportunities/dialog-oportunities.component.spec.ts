import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOportunitiesComponent } from './dialog-oportunities.component';

describe('DialogOportunitiesComponent', () => {
  let component: DialogOportunitiesComponent;
  let fixture: ComponentFixture<DialogOportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
