import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Catalog } from 'src/app/models/Catalogs';
import { DialogQuotesComponent } from 'src/app/pages/accounts/components/dialog-quotes/dialog-quotes.component';
import { CatalogsService } from 'src/app/services/catalogs/catalogs.service';
import { StorageService } from 'src/app/services/shared/storage.service';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  @Input() isCreate: boolean = false;
  @Output() saveData:EventEmitter<any> = new EventEmitter<any>();
  @Input() get data() {
    return this.isTryBuy;
  }
  set data(data: any) {
    this.reasonVlue = data?.data?.reason;

    this.isTryBuy = data;
    if (data?.data?.trybuy)
      this.form.get('quoteTypeTry')?.setValue(data.data?.trybuy);

    if (data?.data?.reason) {
      this.form.get('reason')?.setValue(data.data?.reason);
    }
  }

  public opportunityNumber;

  eps:Catalog[]=[];
  isTryBuy: any;
  reasonVlue: any;
  name!: string;
  opportunityName!: string;
  quoteTypeValue!: string;
  dataPickerValue!: any;
  form: FormGroup;
  public isAdmin(): boolean {
    return false;
  }
  hld!: File;
  lastValue!: number;
  statusQuote!: string;
  constructor(
    public stServices: StorageService,
    public dialog: MatDialog,
    private _url: ActivatedRoute,
    private fb: FormBuilder,
    private _router: Router,
    private spinner: NgxSpinnerService,
    private catalogService:CatalogsService
  ) {
    this.opportunityNumber = this._url.snapshot.paramMap.get('id');
    this.form = this.fb.group({
      quoteName: ['', Validators.required],
      eps: ['', Validators.required],
      dataPicker: ['', Validators.required],
      isMain: [true],
      reason: [],
      quoteType: ['3'],
      quoteTypeTry: false,
    });
    this.lastValue = this.form.get('quoteType')?.value;
  }

  ngOnInit(): void {
    this.loadData();
    this.getEps();
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

  getEps(){
    this.catalogService.getCatalogQuoteEps()
    .subscribe(response=>{
      this.eps=response;
    })
  }
  openDialog(): void {

    this.name = this.form.controls.quoteName.value;
    this.saveData.emit(this.form.value);
/*     const dialogRef = this.dialog.open(DialogQuotesComponent, {
      width: '393px',
      height: '291px',
      data: { name: this.name },
    }); */
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

  onChangeTry() {
    this.form.get('quoteType')?.setValue(3);

    if (this.form.get('quoteTypeTry')?.value) {
      this.form.get('quoteType')?.disable();
      this.form.get('reason')?.enable();
    } else {
      this.form.get('reason')?.setValue('');
      this.form.get('reason')?.disable();
      this.form.get('quoteType')?.enable();
    }
  }

  private loadData(): void {
    const quoteSelected = this.stServices.getObjetSelected;
    if (this.isCreate === false) {
      if (quoteSelected) {
        this.fillInfoDetail(quoteSelected);
      } else {
        this._router.navigate(['/quotes']);
      }
      this.spinner.hide();
    }
  }

  private fillInfoDetail(quote: any): void {
    const opportunity = quote.opportunity;
    this.opportunityName = opportunity.name;
    this.statusQuote = quote.status;
    this.name = quote.name;

    if (quote.isRFP === true) {
      this.form.enable();
      this.form.get('quoteType')?.setValue('1');

      if (this.isCreate === false) {
        if (this.form.get('quoteType')?.value === '1') {
          this.form.get('quoteTypeTry')?.setValue(false);
          this.form.get('reason')?.setValue('');
          this.form.get('reason')?.disable();
        }
      }
    }

    if (quote.isBidding === true) {
      this.form.enable();
      this.form.get('quoteType')?.setValue('2');

      if (this.isCreate === false) {
        if (this.form.get('quoteType')?.value === '2') {
          this.form.get('quoteTypeTry')?.setValue(false);
          this.form.get('reason')?.setValue('');
          this.form.get('reason')?.disable();
        }
      }
    }
    if (opportunity.isTryAndBuy === true) {
      this.form.get('quoteType')?.setValue('3');
      if (this.isCreate === false) {
        if (this.form.get('quoteType')?.value === '3') {
          this.form.enable();
          this.form.get('quoteTypeTry')?.setValue(true);
          this.form.get('reason')?.enable();
          this.form.get('reason')?.setValue(opportunity.tryAndBuyReason);
          this.form.get('quoteType')?.disable();
        }
      }
    } else {
      if (this.isCreate === false) {
        if (this.form.get('quoteType')?.value !== '3') {
          this.form.enable();
          this.form.get('quoteTypeTry')?.setValue(false);
          this.form.get('reason')?.setValue('');

          this.form.get('reason')?.disable();
          this.form.get('quoteType')?.enable();
        }
      }
    }
    const date = quote.validity.split('/');
    this.form.patchValue({
      quoteName: [quote.name],
      eps: quote.epsId,
      dataPicker: new Date(date[2], date[1] - 1, date[0]),
      isMain: [quote.isMain],
    });

    this.dataPickerValue = this.form.get('dataPicker')?.value;
  }
}
