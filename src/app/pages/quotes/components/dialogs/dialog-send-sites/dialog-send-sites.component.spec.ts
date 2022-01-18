import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendSitesComponent } from './dialog-send-sites.component';

describe('DialogSendSitesComponent', () => {
  let component: DialogSendSitesComponent;
  let fixture: ComponentFixture<DialogSendSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSendSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSendSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
