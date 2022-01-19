
import {
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
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.scss'],
})
export class TableGeneralComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() dataSource: any[] = [];
  @Input() idTableShow: number = 0; //indicador de que tabla se muestra
  @Input() showHeaderTable!: boolean;
  @Input() dataSourceLoadedSites = new MatTableDataSource();
  @Output() fileEmitter: EventEmitter<File> = new EventEmitter<File>();
  @ViewChild('dataTable') dataTable: any;

  selection = new SelectionModel(true, [...this.dataSourceLoadedSites.data]);
  dtOptions: DataTables.Settings = {};
  columns2: string[] = ['check', 'site', 'coverage', 'accessMedia', 'edit'];
  expandedElement!: Account | null;
  data: any[] = [];
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
  ) { }

  ngOnInit(): void { }

  goAccountDetail(account: Account): void {
    this.storageService.setDataName(account.accountName);
    this.route.navigate(['/accounts/detail', account.id]);
  }

  goOportunitiesDetail(account: any): void {
    this.storageService.setDataName(account.name);
    this.route.navigate(['/opportunities', account.numberList]);
  }

  goQuotesDetail(quote: any): void {
    this.storageService.setDataName(quote.quoteName);
    this.route.navigate(['/quotes', quote.numberList]);
  }

  handdleFile(file: File) {
    this.fileEmitter.emit(file);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceLoadedSites.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceLoadedSites.data.forEach((row) => {
        this.selection.select(row)
      });
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
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
    this.dialog.open(DialogNewContactComponent, { width: '40%' });
  }

  onEdit(): void {
    this.dialog.open(DialogEditLoadSitesComponent, {
      height: '90%',
      width: '60%',
    });
  }

  onDeleteSites(): void {
    this.dialog.open(DialogDeletedSitesComponent, {
      height: '35%',
      width: '30%',
      panelClass: 'container-cc'
    });
  }

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
}
