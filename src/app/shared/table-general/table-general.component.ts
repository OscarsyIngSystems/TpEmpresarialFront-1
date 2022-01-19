import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { StorageService } from 'src/app/services/shared/storage.service';
import { DialogEventComponent } from 'src/app/pages/accounts/components/dialog-event/dialog-event.component';
import { DialogNewContactComponent } from 'src/app/pages/accounts/components/dialog-new-contact/dialog-new-contact.component';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEditLoadSitesComponent } from 'src/app/pages/quotes/components/dialogs/dialog-edit-load-sites/dialog-edit-load-sites.component';
import { DialogDeletedSitesComponent } from './../../pages/quotes/components/dialogs/dialog-deleted-sites/dialog-deleted-sites.component';
import { DialogTaskComponent } from './../../pages/accounts/components/dialog-task/dialog-task.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.scss'],
})
export class TableGeneralComponent implements OnInit, AfterContentInit {
  @Input() columns: any[] = []; //nombrs de las columnase
  @Input() dataSource: any[] = []; //datos de la tabla
  data: any[] = [];
  @Input() idTableShow: number = 0; //indicador de que tabla se muestra
  @Input() showHeaderTable!: boolean;
  @Input() dataSourceLoadedSites = new MatTableDataSource();
  @Output() fileEmitter: EventEmitter<File> = new EventEmitter<File>();
  @ViewChild('dataTable') dataTable: any;
  dtOptions: DataTables.Settings = {};
  columns2: string[] = ['check', 'site', 'coverage', 'accessMedia', 'edit'];

  expandedElement!: Account | null;
  lengthMenu = [10, 20, 30];

  @Input()
  get dataFile(): any[] {
    return this.data;
  }
  set dataFile(data: any[]) {
    this.data = data;
  }

  constructor(
    private route: Router,
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.dtOptions = {
      dom: !this.showHeaderTable
        ? "<'row'<'col-2'i><'col-2 pt-2'l><'col-8 pt-2'f>>" +
          "<'row'<'col-12'tr>>" +
          "<'row'<'col-12 d-flex justify-content-center'p>>"
        : '<"bottom"t <"d-flex justify-content-center" p>>',
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
        info: '_TOTAL_ elementos',
        infoFiltered: '',
        zeroRecords: 'No se encontraron elementos',
        infoEmpty: '',
      },
      lengthMenu: this.lengthMenu,
    };
  }

  goAccountDetail(account: Account): void {
    this.storageService.setDataName(account.accountName);
    this.route.navigate(['/accounts/detail', account.id]);
  }

  goOportunitiesDetail(account: any): void {
    this.storageService.setDataName(account.name);
    this.route.navigate(['/opportunities', account.numberList]);
  }

  goQuotesDetail(quote: any) {
    this.storageService.setDataName(quote.quoteName);
    this.route.navigate(['/quotes', quote.numberList]);
  }

  handdleFile(file: File) {
    this.fileEmitter.emit(file);
  }

  openDialogTask(): void {
    this.dialog.open(DialogTaskComponent, { data: null, width: '30%' });
  }

  openDialogEvent(): void {
    this.dialog.open(DialogEventComponent, {
      data: null,
      width: '30%',
      disableClose: true,
    });
  }

  openDialogNewContact(): void {
    this.dialog.open(DialogNewContactComponent, { width: '42%' });
  }

  onEdit(): void {
    this.dialog.open(DialogEditLoadSitesComponent, {
      height: '90%',
      width: '60%',
    });
  }

  onDeleteSites() {
    this.dialog.open(DialogDeletedSitesComponent, {
      height: '35%',
      width: '30%',
      panelClass: 'container-cc',
    });
  }
}
