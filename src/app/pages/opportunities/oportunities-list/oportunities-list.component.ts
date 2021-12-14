import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-oportunities-list',
  templateUrl: './oportunities-list.component.html',
  styleUrls: ['./oportunities-list.component.scss'],
})
export class OportunitiesListComponent implements OnInit {
  public contentLabels = 'oportunities.';
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID',
      value: '9898987',
    },
    {
      name: 'Folio Cuenta',
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

  columnsShow = [
    {
      key: 'numberList',
      columnName: this.contentLabels + 'table.colum1',
    },
    {
      key: 'oportunityName',
      columnName: this.contentLabels + 'table.colum2',
    },
    {
      key: 'oportunityNumber',
      columnName: this.contentLabels + 'table.colum3',
    },
    {
      key: 'stage',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'amount',
      columnName: this.contentLabels + 'table.colum5',
    },
  ];
  public dataSource = [
    {
      numberList: 1,
      oportunityName: 'Audi',
      oportunityNumber: '3754545',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
    {
      numberList: 2,
      oportunityName: 'Audi',
      oportunityNumber: '3754545',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
    {
      numberList: 3,
      oportunityName: 'Audi',
      oportunityNumber: '3754545',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
    {
      numberList: 4,
      oportunityName: 'Audi',
      oportunityNumber: '3754545',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
    {
      numberList: 5,
      oportunityName: 'Audi',
      oportunityNumber: '3754545',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
