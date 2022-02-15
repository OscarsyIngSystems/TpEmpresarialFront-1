import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { InfoDetail } from 'src/app/models/infoDetail';
import { DialogQuotesComponent } from 'src/app/pages/accounts/components/dialog-quotes/dialog-quotes.component';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  selector: 'app-quotes-create',
  templateUrl: './quotes-create.component.html',
  styleUrls: ['./quotes-create.component.scss'],
})
export class QuotesCreateComponent implements OnInit {
  detail: any;
  infoDetail: Array<InfoDetail> = [];

  data: any;
  constructor(
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private stService: StorageService,
    private quoteService: QuotesService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.getData();
  }

  getData() {
    let state = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    state.subscribe((data: any) => {
      this.data = data;
      console.log(data.data);
    });
  }
  ngOnInit(): void {
    this.detail = this.stService.getObjetSelected;
    if (this.detail) {
      this.infoDetail = [
        {
          name: 'Nombre de la cuenta',
          value: this.detail.accountName,
        },
        {
          name: 'Número de oportunidad',
          value: this.detail.number,
        },

        {
          name: 'Etapa oportunidad',
          value: this.detail.stage,
        },
        {
          name: 'Importe',
          value: this.detail.amount,
        },
        {
          name: 'Fecha estimada de cierre',
          value: this.detail.closeDate,
        },

        {
          name: 'Propietario de la cuenta',
          value: this.detail.owner,
        },
      ];
    } else {
      this.router.navigate(['/opportunities']);
    }
  }

  saveQuote(event: any) {
    const newQuote = {
      opportunityId: this.detail.id,
      name: event.quoteName,
      status: 'Borrador',
      validity: event.dataPicker.getTime(),
      isMain: event.isMain,
      isTryAndBuy: event.quoteTypeTry,
      ...(event.reason && { tryAndBuyReason: event.reason }),
      isRFP: event.quoteType == '1',
      isBidding: event.quoteType == '2',
      epsId: event.eps,
    };
    this.spinner.show();
    this.quoteService.createQuote(newQuote).subscribe(
      (response) => {
        this.spinner.hide();
        console.log(response);
        const dialogRef = this.dialog.open(DialogQuotesComponent, {
          width: '393px',
          height: '291px',
          data: { name: newQuote.name },
        });
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }
}
