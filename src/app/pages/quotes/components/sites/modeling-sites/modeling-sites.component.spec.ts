import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelingSitesComponent } from './modeling-sites.component';

describe('ModelingSitesComponent', () => {
  let component: ModelingSitesComponent;
  let fixture: ComponentFixture<ModelingSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelingSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelingSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
