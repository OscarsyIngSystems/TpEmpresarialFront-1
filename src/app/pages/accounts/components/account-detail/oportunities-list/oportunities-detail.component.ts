import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';
import { TableOptions } from 'src/app/models/tableOptions';

@Component({
  selector: 'app-oportunities-detail',
  templateUrl: './oportunities-detail.component.html',
  styleUrls: ['./oportunities-detail.component.scss'],
})
export class OportunitiesDetailComponent implements OnInit {
  public tableProps!: TableOptions;
  public contentLabels = 'accounts.account-detail-oportunity.';
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
  constructor() {
    this.tableProps = {
      columnsShow: [
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
      ],
      columsToDisplay: [
        'numberList',
        'oportunityName',
        'oportunityNumber',
        'stage',
        'amount',
      ],
      contentLabels: 'accounts.account-detail-oportunity.',
      dataSource: [
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
      ],
    };
  }

  ngOnInit(): void {}
}
