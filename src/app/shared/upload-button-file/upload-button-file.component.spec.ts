import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadButtonFileComponent } from './upload-button-file.component';

describe('UploadButtonFileComponent', () => {
  let component: UploadButtonFileComponent;
  let fixture: ComponentFixture<UploadButtonFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadButtonFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadButtonFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
