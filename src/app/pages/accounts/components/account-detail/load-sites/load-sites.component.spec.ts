import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSitesComponent } from './load-sites.component';

describe('LoadSitesComponent', () => {
  let component: LoadSitesComponent;
  let fixture: ComponentFixture<LoadSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
