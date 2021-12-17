import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
})
export class RelatedComponent implements OnInit {
  public contentLabels = 'accounts.';
  public accountId;

  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID Cliente único',
      value: '873827',
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
      columnName: this.contentLabels + 'table-related.colum1',
    },
    {
      key: 'name',
      columnName: this.contentLabels + 'table-related.colum2',
    },
    {
      key: 'opportunity_number',
      columnName: this.contentLabels + 'table-related.colum7',
    },
    {
      key: 'status',
      columnName: this.contentLabels + 'table-related.colum3',
    },
    {
      key: 'mounthTotal',
      columnName: this.contentLabels + 'table-related.colum4',
    },
    {
      key: 'closeDate',
      columnName: this.contentLabels + 'table-related.colum6',
    },
  ];
  public dataSource = [
    {
      numberList: 1,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 2,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 3,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 4,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 5,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 6,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 7,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 8,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 9,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 10,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 11,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 12,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 13,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 14,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
    {
      numberList: 15,
      name: 'Audi-CDMX-Cot',
      opportunity_number: '0987654',
      status: 'Borrador',
      mounthTotal: '$2225.21 MXN',
      closeDate: '19/12/2021',
    },
  ];
  constructor(private _url: ActivatedRoute) {
    this.accountId = this._url.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}
}
