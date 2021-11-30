import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunityCreateComponent } from './oportunity-create.component';

describe('OportunityCreateComponent', () => {
  let component: OportunityCreateComponent;
  let fixture: ComponentFixture<OportunityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunityCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
