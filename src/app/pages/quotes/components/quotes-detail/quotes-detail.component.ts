import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.scss'],
})
export class QuotesDetailComponent implements OnInit {
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Numero de oportunidad',
      value: '678676',
    },
    {
      name: 'Tipo',
      value: 'Nuevo',
    },
    {
      name: 'Etapa',
      value: 'Necesidades',
    },
    {
      name: 'Importe',
      value: 'Estrategica',
    },
    {
      name: 'Fecha de cierre',
      value: '10/10/2021',
    },
    {
      name: 'Fecha estimada entrega',
      value: '10/10/2021',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio Aparicio Contreras',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
