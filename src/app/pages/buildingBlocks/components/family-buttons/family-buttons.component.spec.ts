import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyButtonsComponent } from './family-buttons.component';

describe('FamilyButtonsComponent', () => {
  let component: FamilyButtonsComponent;
  let fixture: ComponentFixture<FamilyButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
