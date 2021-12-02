import { Component, OnInit } from '@angular/core';
import { TableOptions } from 'src/app/models/tableOptions';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListDeatilComponent implements OnInit {
  public tableProps!: TableOptions;
  public contentLabels = 'accounts.account_detail_quotes.';

  constructor() {
    this.tableProps = {
      columnsShow: [
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
      ],
      columsToDisplay: [
        'numberList',
        'quoteName',
        'quoteInvoice',
        'total',
        'status',
      ],
      contentLabels: 'accounts.account-detail-oportunity.',
      dataSource: [
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
      ],
    };
  }

  ngOnInit(): void {}
}
