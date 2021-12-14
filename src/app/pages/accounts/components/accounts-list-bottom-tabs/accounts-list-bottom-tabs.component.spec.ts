import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsListBottomTabsComponent } from './accounts-list-bottom-tabs.component';

describe('AccountsListBottomTabsComponent', () => {
  let component: AccountsListBottomTabsComponent;
  let fixture: ComponentFixture<AccountsListBottomTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsListBottomTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsListBottomTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
