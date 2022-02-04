import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperBuildingBlocksComponent } from './stepper-building-blocks.component';

describe('StepperBuildingBlocksComponent', () => {
  let component: StepperBuildingBlocksComponent;
  let fixture: ComponentFixture<StepperBuildingBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperBuildingBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperBuildingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
