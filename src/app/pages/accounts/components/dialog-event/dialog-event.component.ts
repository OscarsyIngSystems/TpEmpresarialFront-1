import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-event',
  templateUrl: './dialog-event.component.html',
  styleUrls: ['./dialog-event.component.scss'],
})
export class DialogEventComponent implements OnInit {
  form: FormGroup;
  team: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public title: string
  ) {
    this.form = this.fb.group({
      subject: ['0', Validators.required],
      allDayEvent: [true],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      startTime: [''],
      endTime: [''],
      reminder: ['0'],
      invite: [''],
    });
  }

  ngOnInit(): void {}

  addTeam(): void {
    this.team.push(this.form.value);
  }
}
