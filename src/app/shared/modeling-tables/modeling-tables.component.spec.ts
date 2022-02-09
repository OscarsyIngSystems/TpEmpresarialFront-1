import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelingTablesComponent } from './modeling-tables.component';

describe('ModelingTablesComponent', () => {
  let component: ModelingTablesComponent;
  let fixture: ComponentFixture<ModelingTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelingTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelingTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
