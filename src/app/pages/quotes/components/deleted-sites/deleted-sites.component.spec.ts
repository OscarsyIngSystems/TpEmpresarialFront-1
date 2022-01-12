import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedSitesComponent } from './deleted-sites.component';

describe('DeletedSitesComponent', () => {
  let component: DeletedSitesComponent;
  let fixture: ComponentFixture<DeletedSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
