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
  public role: number = 0;
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
    this.loadData();
    this.setRole();
  }

  public setRole() {
    this.role = Number(localStorage.getItem('role'))
    console.log('tole',this.role)
  }

  private loadData(): void {
    this.spinner.show();
    this._service.getQuotes().subscribe(
      (response) => {
        this.spinner.hide();
        this.dataSource = response;
      },
      (error) => {
        console.error(error);
        this.spinner.hide();
      }
    );
  }
}
