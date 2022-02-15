import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-task',
  templateUrl: './dialog-task.component.html',
  styleUrls: ['./dialog-task.component.scss'],
})
export class DialogTaskComponent implements OnInit {
  form: FormGroup;
  team: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public title: string
  ) {
    this.form = this.fb.group({
      subject: ['0', Validators.required],
      expiration: [new Date(), Validators.required],
      type: ['0', Validators.required],
    });
  }

  ngOnInit(): void {}

  addTeam() {
    this.team.push(this.form.value);
  }
}
