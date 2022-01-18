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
      value: '10/10/2021',
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
  constructor(public stServices: StorageService) {
    stServices.setDataName('Audi CDMX-COT');
  }

  ngOnInit(): void {}
}
