import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayautBuildingBlocksComponent } from './layaut-building-blocks.component';

describe('LayautBuildingBlocksComponent', () => {
  let component: LayautBuildingBlocksComponent;
  let fixture: ComponentFixture<LayautBuildingBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayautBuildingBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayautBuildingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
