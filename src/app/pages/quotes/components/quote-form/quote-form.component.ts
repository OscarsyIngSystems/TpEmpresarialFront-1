import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogQuotesComponent } from 'src/app/pages/accounts/components/dialog-quotes/dialog-quotes.component';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  @Input() isCreate: boolean = false;
  @Input() get data() {
    return this.isTryBuy;
  }
  set data(data: any) {
    console.log(data?.data?.reason);
    this.reasonVlue = data?.data?.reason;

    this.isTryBuy = data;
    if (data?.data?.trybuy)
      this.form.get('quoteTypeTry')?.setValue(data.data?.trybuy);

    if (data?.data?.reason) {
      this.form.get('reason')?.setValue(data.data?.reason);
    }
  }

  public opportunityNumber;

  isTryBuy: any;
  reasonVlue: any;
  name = '“COT7808232”';
  form: FormGroup;
  public isAdmin(): boolean {
    return false;
  }
  hld!: File;
  lastValue!: number;
  constructor(
    public dialog: MatDialog,
    private _url: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.opportunityNumber = this._url.snapshot.paramMap.get('id');
    this.form = this.fb.group({
      quoteName: ['Audi CDMX-COT', Validators.required],
      eps: ['one', Validators.required],
      dataPicker: [new Date(), Validators.required],
      isMain: [true],
      isMainQuotation: [true],
      reason: [],
      quoteType: ['3'],
      quoteTypeTry: [false],
    });
    this.lastValue = this.form.get('quoteType')?.value;
  }

  ngOnInit(): void {
    if (this.form.get('quoteTypeTry')?.value) {
      this.form.get('quoteType')?.disable();
      this.form.get('reason')?.enable();
    } else {
      this.form.get('reason')?.disable();
      this.form.get('quoteType')?.enable();
    }
  }

  ngAfterContentInit(): void {
    if (!this.isCreate) {
      this.form.disable();
      this.form.get('dataPicker')?.enable();
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

  selectFile(file: File) {
    this.hld = file;
  }

  onChange(event: any) {
    if (event.target.value != 3) {
      this.form.get('reason')?.disable();
    } else {
      this.form.get('reason')?.enable();
    }
  }

  onChangeTry(event: any) {
    this.form.get('quoteType')?.setValue(3);

    if (this.form.get('quoteTypeTry')?.value) {
      this.form.get('quoteType')?.disable();
      this.form.get('reason')?.enable();
    } else {
      this.form.get('reason')?.disable();
      this.form.get('quoteType')?.enable();
    }
  }
}
