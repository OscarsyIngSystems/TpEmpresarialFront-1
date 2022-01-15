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
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Audi CDMX OP',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Zapata 2',
      status: 'Borrador',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Automotriz Nissan 1',
      status: 'Borrador',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'VW Lomas OP',
      status: 'Borrador',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
      quoteName: 'Cotización Audi',
      quoteInvoice: 'COT7808232',
      opportunity: 'Toyota OP-2',
      status: 'Completada',
      validity: '20/12/2022',
    },
    {
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
