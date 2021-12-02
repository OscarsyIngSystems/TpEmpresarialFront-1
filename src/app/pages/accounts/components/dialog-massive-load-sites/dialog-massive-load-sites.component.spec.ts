import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMassiveLoadSitesComponent } from './dialog-massive-load-sites.component';

describe('DialogMassiveLoadSitesComponent', () => {
  let component: DialogMassiveLoadSitesComponent;
  let fixture: ComponentFixture<DialogMassiveLoadSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMassiveLoadSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMassiveLoadSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
