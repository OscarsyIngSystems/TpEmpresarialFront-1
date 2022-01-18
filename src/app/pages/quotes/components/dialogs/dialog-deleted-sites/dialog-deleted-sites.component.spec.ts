import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletedSitesComponent } from './dialog-deleted-sites.component';

describe('DialogDeletedSitesComponent', () => {
  let component: DialogDeletedSitesComponent;
  let fixture: ComponentFixture<DialogDeletedSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeletedSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeletedSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
