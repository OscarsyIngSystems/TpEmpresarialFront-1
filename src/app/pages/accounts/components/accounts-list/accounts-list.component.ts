import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from 'src/app/models/account';

const ELEMENT_DATA: Account[] = [
  {
    id: 873828,
    accountName: 'AUDI CDMX',
    accountId: 'CRM-00022445',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
    created: '18/01/2021',
  },

  {
    id: 873827,
    accountName: 'AUDI CDMX',
    accountId: 'CRM-00022445',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
    created: '19/01/2021',
  },

  {
    id: 873826,
    accountName: 'AUDI CDMX',
    accountId: 'CRM-00022445',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
    created: '20/01/2020',
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
    {
      key: 'created',
      columnName: this.contentLabels + 'table.colum9',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
