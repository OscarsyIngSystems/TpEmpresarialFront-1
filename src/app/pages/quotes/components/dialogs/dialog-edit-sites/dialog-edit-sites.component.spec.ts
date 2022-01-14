import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditSitesComponent } from './dialog-edit-sites.component';

describe('DialogEditSitesComponent', () => {
  let component: DialogEditSitesComponent;
  let fixture: ComponentFixture<DialogEditSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
