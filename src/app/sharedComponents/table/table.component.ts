import { Component, Input, OnInit } from '@angular/core';
import { TableOptions } from 'src/app/models/tableOptions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableProps!: TableOptions;

  public contentLabels = '';

  dataSource: Array<any> = [];
  columnsToDisplay: Array<any> = [];
  columnsShow: Array<any> = [];
  expandedElement!: any | null;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.dataSource = this.tableProps.dataSource;
    this.columnsToDisplay = this.tableProps.columsToDisplay;
    this.columnsShow = this.tableProps.columnsShow;
    this.contentLabels = this.tableProps.contentLabels;
  }
}
