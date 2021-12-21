import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedSitesComponent } from './loaded-sites.component';

describe('LoadedSitesComponent', () => {
  let component: LoadedSitesComponent;
  let fixture: ComponentFixture<LoadedSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadedSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadedSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
