import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentAccountComponent } from './segment-account.component';

describe('SegmentAccountComponent', () => {
  let component: SegmentAccountComponent;
  let fixture: ComponentFixture<SegmentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
