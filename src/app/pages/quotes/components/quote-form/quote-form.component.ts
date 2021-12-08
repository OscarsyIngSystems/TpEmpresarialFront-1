import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuotesComponent } from 'src/app/pages/accounts/components/dialog-quotes/dialog-quotes.component';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  name = '“COT7808232”';
  form: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      quoteName: ['', Validators.required],
      eps: ['', Validators.required],
      reason: ['', Validators.required],
      quoteType: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogQuotesComponent, {
      width: '393px',
      height: '291px',
      data: { name: this.name },
    });
  }
}
