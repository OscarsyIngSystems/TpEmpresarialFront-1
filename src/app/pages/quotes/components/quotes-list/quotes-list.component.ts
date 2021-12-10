import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';
import { TableOptions } from 'src/app/models/tableOptions';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListDeatilComponent implements OnInit {
  public tableProps!: TableOptions;
  public contentLabels = 'quotes.';
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
      key: 'quoteName',
      columnName: this.contentLabels + 'table.colum2',
    },
    {
      key: 'quoteInvoice',
      columnName: this.contentLabels + 'table.colum3',
    },
    {
      key: 'total',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'status',
      columnName: this.contentLabels + 'table.colum5',
    },
  ];

  dataSource = [
    {
      numberList: 1,
      quoteName: 'Cotizacion Audi',
      quoteInvoice: 'COT7808232',
      total: '$45454.22',
      status: 'Borrador',
    },
    {
      numberList: 2,
      quoteName: 'Cotizacion Audi',
      quoteInvoice: 'COT7808232',
      total: '$45454.22',
      status: 'Borrador',
    },
    {
      numberList: 3,
      quoteName: 'Cotizacion Audi',
      quoteInvoice: 'COT7808232',
      total: '$45454.22',
      status: 'Borrador',
    },
    {
      numberList: 4,
      quoteName: 'Cotizacion Audi',
      quoteInvoice: 'COT7808232',
      total: '$45454.22',
      status: 'Borrador',
    },
    {
      numberList: 5,
      quoteName: 'Cotizacion Audi',
      quoteInvoice: 'COT7808232',
      total: '$45454.22',
      status: 'Borrador',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
