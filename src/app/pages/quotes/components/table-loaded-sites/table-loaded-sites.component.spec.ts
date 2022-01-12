import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLoadedSitesComponent } from './table-loaded-sites.component';

describe('TableLoadedSitesComponent', () => {
  let component: TableLoadedSitesComponent;
  let fixture: ComponentFixture<TableLoadedSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLoadedSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLoadedSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
