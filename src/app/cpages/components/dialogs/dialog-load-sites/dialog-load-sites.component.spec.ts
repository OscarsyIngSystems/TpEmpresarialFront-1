import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoadSitesComponent } from './dialog-load-sites.component';

describe('DialogLoadSitesComponent', () => {
  let component: DialogLoadSitesComponent;
  let fixture: ComponentFixture<DialogLoadSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoadSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoadSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
