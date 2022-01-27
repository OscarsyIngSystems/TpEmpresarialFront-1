import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActionsBuildingBlocksComponent } from './header-actions-building-blocks.component';

describe('HeaderActionsBuildingBlocksComponent', () => {
  let component: HeaderActionsBuildingBlocksComponent;
  let fixture: ComponentFixture<HeaderActionsBuildingBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderActionsBuildingBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderActionsBuildingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
