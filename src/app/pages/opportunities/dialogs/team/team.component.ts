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
  forms: Array<FormGroup> = [];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public title: string
  ) {
    this.forms.push(
      this.fb.group({
        user: ['', Validators.required],
        function: ['', Validators.required],
      })
    );
  }

  ngOnInit(): void {}

  addTeam() {
    if (this.isValidForm)
      this.forms.push(
        this.fb.group({
          user: ['', Validators.required],
          function: ['', Validators.required],
        })
      );
  }

  private get isValidForm(): boolean {
    let isValid = true;
    this.forms.forEach((form) => {
      if (form.invalid) isValid = false;
    });

    return isValid;
  }
}
