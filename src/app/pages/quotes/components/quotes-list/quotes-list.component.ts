import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';
import { TableOptions } from 'src/app/models/tableOptions';
import { NgxSpinnerService } from 'ngx-spinner';

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
      key: 'created',
      columnName: this.contentLabels + 'table.colum6',
    },
    {
      key: 'validity',
      columnName: this.contentLabels + 'table.colum7',
    },
  ];

  dataSource: any[] = [];

  constructor(
    private _service: QuotesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.loadData();
  }

  private loadData(): void {
    this._service.getQuotes().subscribe(
      (response) => {
        console.log(response);
        this.dataSource = response;
        this.spinner.hide();
      },
      (error) => {
        console.error(error);
        this.spinner.hide();
      }
    );
  }
}
