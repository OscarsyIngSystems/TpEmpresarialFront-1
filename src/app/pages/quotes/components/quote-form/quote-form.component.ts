import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuotesComponent } from 'src/app/pages/accounts/components/dialog-quotes/dialog-quotes.component';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  @Input() isCreate: boolean = false;

  name = '“COT7808232”';
  form: FormGroup;
  public isAdmin(): boolean {
    return false;
  }

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      quoteName: ['Audi CDMX-COT', Validators.required],
      eps: ['EPS IV', Validators.required],
      dataPicker: ['22-Dic-2021', Validators.required],
      isMainQuotation: [true, Validators.required],
      reason: ['Superioridad técnica', Validators.required],
      quoteType: ['3', Validators.required],
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
