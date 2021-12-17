import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-oportunity-create',
  templateUrl: './oportunity-create.component.html',
  styleUrls: ['./oportunity-create.component.scss'],
})
export class OportunityCreateComponent implements OnInit {
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID cliente único',
      value: '9898987',
    },
    {
      name: 'Folio cuenta',
      value: 'CRM-00022445',
    },
    {
      name: 'RFC',
      value: 'HSP030709EA2',
    },
    {
      name: 'Segmento',
      value: 'I',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
