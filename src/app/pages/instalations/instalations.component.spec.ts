import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalationsComponent } from './instalations.component';

describe('InstalationsComponent', () => {
  let component: InstalationsComponent;
  let fixture: ComponentFixture<InstalationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstalationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
