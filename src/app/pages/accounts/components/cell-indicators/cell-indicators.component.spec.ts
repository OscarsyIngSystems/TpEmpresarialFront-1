import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellIndicatorsComponent } from './cell-indicators.component';

describe('CellIndicatorsComponent', () => {
  let component: CellIndicatorsComponent;
  let fixture: ComponentFixture<CellIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
