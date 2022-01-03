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
      key: 'opportunity',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'status',
      columnName: this.contentLabels + 'table.colum5',
    },
    {
      key: 'validity',
      columnName: this.contentLabels + 'table.colum6',
    },
  ];

  dataSource = [
    {
      numberList: 1,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Audi CDMX OP',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList: 2,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Zapata 2',
      status: 'Borrador',
      validity: '20/12/2022',
    },
    {
      numberList: 3,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Automotriz Nissan 1',
      status: 'Borrador',
      validity: '20/12/2022',
    },
    {
      numberList: 4,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'VW Lomas OP',
      status: 'Borrador',
      validity: '20/12/2022',
    },
    {
      numberList: 5,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList: 6,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList: 7,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList: 8,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList: 9,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList: 10,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList:11,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList: 12,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      numberList: 13,
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
