import { ActivatedRoute } from '@angular/router';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';
import { StorageService } from '../../../../services/shared/storage.service';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.scss'],
})
export class QuotesDetailComponent implements OnInit {
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX-COT',
    },
    {
      name: 'Número de oportunidad',
      value: '678676',
    },
    {
      name: 'Etapa oportunidad',
      value: 'Necesidades',
    },
    {
      name: 'Importe',
      value: '$120,000',
    },
    {
      name: 'Fecha de cierre',
      value: '10/10/2022',
    },
    {
      name: 'Vigencia cotización',
      value: '10/10/2022',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio Aparicio Contreras',
    },
  ];
  public accountId;

  constructor(
    private _url: ActivatedRoute,
    private _service: QuotesService,
    public stServices: StorageService
  ) {
    stServices.setDataName('Audi CDMX-COT');
    this.accountId = Number(
      this._url.snapshot.paramMap.get('id') !== null
        ? this._url.snapshot.paramMap.get('id')
        : '0'
    );
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this._service.getQuoteDetail(this.accountId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
