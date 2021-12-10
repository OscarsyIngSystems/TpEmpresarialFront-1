import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.scss'],
})
export class TableGeneralComponent implements OnInit {
  @Input() columns: any[] = []; //nombrs de las columnase
  @Input() dataSource: any[] = []; //datos de la tabla
  @Input() idTableShow: number = 0; //indicador de que tabla se muestra

  @ViewChild('dataTable') dataTable: any;
  dtOptions: DataTables.Settings = {};

  expandedElement!: Account | null;
  lengthMenu = [10, 20];
  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      dom:
        "<'row'<'col-2'i><'col-2 pt-2'l><'col-8 pt-2'f>>" +
        "<'row'<'col-12'tr>>" +
        "<'row'<'col-12 d-flex justify-content-center'p>>",
      pagingType: 'full_numbers',
      language: {
        lengthMenu: 'Mostrar _MENU_',
        search: 'Buscar',
        paginate: {
          first: '',
          last: '',
          next: '',
          previous: '',
        },
        info: '_TOTAL_ cuentas',
        infoFiltered: '',
        zeroRecords: 'No se encontraron cuentas',
        infoEmpty: '',
      },
      lengthMenu: this.lengthMenu,
    };
  }
}
