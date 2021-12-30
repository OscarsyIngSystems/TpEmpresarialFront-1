import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from 'src/app/models/account';

const ELEMENT_DATA: Account[] = [
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    accountId: 'CRM-00022445',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
  },

  {
    numberList: 8,
    id: 873827,
    accountName: 'AUDI CDMX',
    accountId: 'CRM-00022445',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
  },

  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    accountId: 'CRM-00022445',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
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
      key: 'accountId',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'identification',
      columnName: this.contentLabels + 'table.colum5',
    },
    {
      key: 'segment',
      columnName: this.contentLabels + 'table.colum6',
    },
    {
      key: 'phone',
      columnName: this.contentLabels + 'table.colum7',
    },
    {
      key: 'contact',
      columnName: this.contentLabels + 'table.colum8',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
