import { ActivatedRoute, Router } from '@angular/router';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';
import { StorageService } from '../../../../services/shared/storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.scss'],
})
export class QuotesDetailComponent implements OnInit {
  infoDetail: Array<InfoDetail> = [];
  public accountId;

  constructor(
    private _url: ActivatedRoute,
    private _service: QuotesService,
    public stServices: StorageService,
    private spinner: NgxSpinnerService,
    private _router: Router
  ) {
    this.accountId = Number(
      this._url.snapshot.paramMap.get('id') !== null
        ? this._url.snapshot.paramMap.get('id')
        : '0'
    );
  }

  ngOnInit(): void {
    this.spinner.show();
    this.loadData();
  }

  private loadData(): void {
    const quoteSelected = this.stServices.getObjetSelected;
    if (quoteSelected) {
      this.fillInfoDetail(quoteSelected);
    } else {
      this._router.navigate(['/quotes']);
    }
    this.spinner.hide();
  }

  private fillInfoDetail(quote: any): void {
    const opportunity = quote.opportunity;
    this.infoDetail = [
      {
        name: 'Nombre de la cuenta',
        value: quote.name, //'Audi CDMX-COT',
      },
      {
        name: 'Número de oportunidad',
        value: opportunity.id, //'678676',
      },
      {
        name: 'Etapa oportunidad',
        value: opportunity.stage, //'Necesidades',
      },
      {
        name: 'Importe',
        value: '$' + Number.parseFloat(opportunity.amount).toFixed(2), //'$120,000',
      },
      {
        name: 'Fecha de cierre',
        value: opportunity.closeDate,
      },
      {
        name: 'Vigencia cotización',
        value: quote.validity, //'10/10/2022',
      },
      {
        name: 'Propietario de la cuenta',
        value: opportunity.owner, //'Sergio Aparicio Contreras',
      },
    ];
  }
}
