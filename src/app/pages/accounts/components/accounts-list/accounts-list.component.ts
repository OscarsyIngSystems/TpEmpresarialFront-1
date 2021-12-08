import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from 'src/app/models/account';

const ELEMENT_DATA: Account[] = [
  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
  },

  {
    numberList: 8,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
  },

  {
    numberList: 1,
    id: 873827,
    accountName: 'AUDI CDMX',
    identification: 'HSP030709EA2',
    segment: 'I',
    phone: ' 55 27632571',
    typeAccount: 'Enlace',
    contact: 'Pedrito lopez',
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
  // columnsToDisplay = [
  //   'numberList',
  //   'id',
  //   'accountName',
  //   'identification',
  //   'segment',
  //   'phone',
  //   'typeAccount',
  // ];

  columnsShow = [
    {
      key: 'numberList',
      columnName: this.contentLabels + 'table.colum1',
    },
    {
      key: 'id',
      columnName: this.contentLabels + 'table.colum2',
    },
    {
      key: 'accountName',
      columnName: this.contentLabels + 'table.colum3',
    },
    {
      key: 'identification',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'segment',
      columnName: this.contentLabels + 'table.colum5',
    },
    {
      key: 'phone',
      columnName: this.contentLabels + 'table.colum6',
    },
    {
      key: 'typeAccount',
      columnName: this.contentLabels + 'table.colum7',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // this.dtOptions = {
    //   dom:
    //     "<'row'<'col-2'i><'col-2 pt-2'l><'col-8 pt-2'f>>" +
    //     "<'row'<'col-12'tr>>" +
    //     "<'row'<'col-12 d-flex justify-content-center'p>>",
    //   pagingType: 'full_numbers',
    //   language: {
    //     lengthMenu: 'Mostrar _MENU_',
    //     search: 'Buscar',
    //     paginate: {
    //       first: '',
    //       last: '',
    //       next: '',
    //       previous: '',
    //     },
    //     info: '_TOTAL_ cuentas',
    //     infoFiltered: '',
    //     zeroRecords: 'No se encontraron cuentas',
    //     infoEmpty: '',
    //   },
    //   lengthMenu: this.lengthMenu,
    // };
    // console.log(this.dataTable);
  }

  /**
   * lengthChange
   */
  // public lengthChange() {
  //   console.log(this.dataTable);
  // }
}
