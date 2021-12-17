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
      eps: ['one', Validators.required],
      dataPicker: [new Date(), Validators.required],
      isMainQuotation: [true],
      reason: ['Superioridad técnica'],
      quoteType: ['3'],
    });
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (!this.isCreate) {
      this.form.disable();
    }
  }
  openDialog(): void {
    this.name = this.form.controls.quoteName.value;
    const dialogRef = this.dialog.open(DialogQuotesComponent, {
      width: '393px',
      height: '291px',
      data: { name: this.name },
    });
  }
}
