import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Team {
  user: string;
  function: string;
}
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  form: FormGroup;
  team: Array<Team> = [];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public title: string
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      function: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addTeam() {
    this.team.push(this.form.value);
    console.log(this.team);
  }
}
