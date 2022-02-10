import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalsComponent } from './nationals.component';

describe('NationalsComponent', () => {
  let component: NationalsComponent;
  let fixture: ComponentFixture<NationalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
