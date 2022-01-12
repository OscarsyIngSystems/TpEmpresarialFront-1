import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewContactComponent } from './dialog-new-contact.component';

describe('DialogNewContactComponent', () => {
  let component: DialogNewContactComponent;
  let fixture: ComponentFixture<DialogNewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
