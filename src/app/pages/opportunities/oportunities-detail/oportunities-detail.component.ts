import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-oportunities-detail',
  templateUrl: './oportunities-detail.component.html',
  styleUrls: ['./oportunities-detail.component.scss'],
})
export class OportunitiesDetailComponent implements OnInit {
  public contentLabels = 'accounts.account-detail-oportunity.';
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'Numero de oportunidad',
      value: '00022445',
    },
    {
      name: 'Etapa',
      value: 'Necesidades',
    },
    {
      name: 'Importe',
      value: 'Estrategicas',
    },
    {
      name: 'Fecha',
      value: '31/08/2021',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
