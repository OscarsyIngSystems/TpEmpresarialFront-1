import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBuildingBlocksComponent } from './title-building-blocks.component';

describe('TitleBuildingBlocksComponent', () => {
  let component: TitleBuildingBlocksComponent;
  let fixture: ComponentFixture<TitleBuildingBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleBuildingBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBuildingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
