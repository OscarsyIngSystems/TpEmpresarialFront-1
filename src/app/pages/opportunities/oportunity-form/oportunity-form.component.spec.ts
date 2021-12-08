import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunityFormComponent } from './oportunity-form.component';

describe('OportunityFormComponent', () => {
  let component: OportunityFormComponent;
  let fixture: ComponentFixture<OportunityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
