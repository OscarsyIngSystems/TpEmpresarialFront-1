import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditLoadSitesComponent } from './dialog-edit-load-sites.component';

describe('DialogEditLoadSitesComponent', () => {
  let component: DialogEditLoadSitesComponent;
  let fixture: ComponentFixture<DialogEditLoadSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditLoadSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditLoadSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
