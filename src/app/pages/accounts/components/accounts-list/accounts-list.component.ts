import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  numberList: number;
  id: number;
  accountName: string;
  identification: string;
  segment: string;
  phone: string;
  typeAccount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
  },
];
@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {
  public contentLabels = 'accounts.acounts-list.';

  dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    'numberList',
    'id',
    'accountName',
    'identification',
    'segment',
    'phone',
    'typeAccount',
  ];
  columnsShow = [
    {
      key: 'numberList',
      columnName: this.contentLabels + 'table.colum1',
    },
    {
      key: 'id',
      columnName: this.contentLabels + 'table.colum2',
    },
    {
      key: 'accountName',
      columnName: this.contentLabels + 'table.colum3',
    },
    {
      key: 'identification',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'segment',
      columnName: this.contentLabels + 'table.colum5',
    },
    {
      key: 'phone',
      columnName: this.contentLabels + 'table.colum6',
    },
    {
      key: 'typeAccount',
      columnName: this.contentLabels + 'table.colum7',
    },
  ];
  expandedElement!: PeriodicElement | null;

  constructor() {}

  ngOnInit(): void {}
}
