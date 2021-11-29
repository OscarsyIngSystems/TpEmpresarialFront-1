export interface TableOptions {
  dataSource: Array<any>;
  columsToDisplay: Array<string>;
  columnsShow: Array<ColumShow>;
  contentLabels: string;
}

interface ColumShow {
  key: string;
  columnName: string;
}
