import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayautAccountsComponent } from './layaut-accounts.component';

describe('LayautAccountsComponent', () => {
  let component: LayautAccountsComponent;
  let fixture: ComponentFixture<LayautAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayautAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayautAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
