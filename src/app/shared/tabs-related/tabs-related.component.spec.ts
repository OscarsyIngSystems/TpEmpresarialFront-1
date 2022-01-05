import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRelatedComponent } from './tabs-related.component';

describe('TabsRelatedComponent', () => {
  let component: TabsRelatedComponent;
  let fixture: ComponentFixture<TabsRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsRelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
