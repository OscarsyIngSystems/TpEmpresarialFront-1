import { QuotesService } from './../../../../services/quotes/quotes.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quotes-received',
  templateUrl: './quotes-received.component.html',
  styleUrls: ['./quotes-received.component.scss']
})
export class QuotesReceivedComponent implements OnInit {
  public contentLabels = 'quotes.quotes-received.';
  dataSource:any[] = [];
  displayedColumns = [

    {
      key: 'quoteName',
      columnName: this.contentLabels + 'colum1',
    },
    {
      key: 'quoteSheet',
      columnName: this.contentLabels + 'colum2'
    },
    {
      key: 'oportunity',
      columnName: this.contentLabels + 'colum3',
    },
    {
      key: 'monthlyTotal',
      columnName: this.contentLabels + 'colum4',
    },
    {
      key: 'validity',
      columnName: this.contentLabels + 'colum5',
    },
    {
      key: 'loadHld',
      columnName: this.contentLabels + 'colum6',
    },
    {
      key: 'overdue',
      columnName: this.contentLabels + 'colum7',
    },
  ];
  constructor(private service: QuotesService) { }

  ngOnInit(): void {
    this.getQuotes()
  }

  getQuotes(): void {
    this.service.getQuotesReceived().subscribe((data) => {
      this.dataSource = data;
      // console.log(this.dataSource);
    });
  }

}
