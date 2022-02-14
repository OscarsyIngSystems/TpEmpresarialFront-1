import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ChangeDetectionStrategy,
  AfterContentInit,
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
import { SharedService } from 'src/app/services/shared/shared.service';
import { DataTableDirective } from 'angular-datatables';
declare var $:any;
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-table-general',
  templateUrl: './table-general.component.html',
  styleUrls: ['./table-general.component.scss'],
})
export class TableGeneralComponent implements OnInit, AfterContentInit {
  @Input() columns: any[] = [];
  @Input() dataSource: any = [];
  @Input() idTableShow: number = 0; //indicador de que tabla se muestra
  @Input() showHeaderTable!: boolean;
  @Input() dataSourceLoadedSites = new MatTableDataSource();
  @Output() fileEmitter: EventEmitter<File> = new EventEmitter<File>();

  @Input() get filterData(): any[] {
    return this.dataAux;
  }
  set filterData(data: any[]) {
/*     let x = $('#dataTableop').DataTable();
    let op={
      "name": data[0].name,
      "number": data[0].number,
     "accountName": data[0].accountName,
      "stage": data[0].stage,
      "amount": data[0].amount,
     "createdDate":  data[0].createdDate,
     "closeDate": data[0].closeDate
    }
    console.log(data, $('#dataTableop').DataTable().data, op);
    x.clear();
    x.row.add(op).draw()
    x.draw() */
    this.dataAux = data;
  }
  @ViewChild('dataTable', { static: false }) dataTable: any;
  @Output() emitter = new EventEmitter<any>();

  selection: any;
  dtOptions: DataTables.Settings = {};
  columns2: string[] = ['check', 'site', 'coverage', 'accessMedia', 'edit'];
  expandedElement!: Account | null;
  data: any[] = [];
  selectedItemsTable: any[] = [];
  lengthMenu = [10, 20, 30];
  disabled: boolean = true;

  dataAux: any[] = [];

  public allSelectedLoadedSitesModel: any = [];

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
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.selection = new SelectionModel(true, []);
  }

  goAccountDetail(account: Account): void {
    this.storageService.setDataName(account.accountName);
    this.storageService.setObjetSelected(account);
    this.route.navigate(['/accounts/detail', account.id]);
  }

  goQuotesDetail(quote: any): void {
    console.log(quote);

    this.storageService.setDataName(quote.name);
    this.storageService.setObjetSelected(quote);
    this.route.navigate(['/quotes', quote.id]);
  }

  handdleFile(file: File) {
    this.fileEmitter.emit(file);
  }

  goOpportunities(opportunity: any) {
    this.storageService.setObjetSelected(opportunity);
    this.storageService.setDataName(opportunity.name);
    this.route.navigate(['/opportunities', opportunity.id]);
  }

  isAllSelected() {
    if (this.selection.selected.length > 0) this.disabled = false;
    if (this.selection.selected.length == 0) this.disabled = true;
    this.selectedItemsTable = this.selection.selected;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceLoadedSites.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSourceLoadedSites.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
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

  onDeleteSites(): void {
    let dlgRef = this.dialog.open(DialogDeletedSitesComponent, {
      height: '35%',
      width: '30%',
      panelClass: 'container-cc',
      data: {
        length: this.selectedItemsTable.length,
        text: 'Sitios eliminados correctamente',
      },
    });
    dlgRef.afterClosed().subscribe((res) => {
      const u = localStorage.getItem('arraySelected');
      const arraySelected = u ? JSON.parse(u) : [];
      console.log(arraySelected);

      this.selectedItemsTable.forEach((element) => {
        arraySelected.push(element);
      });
      localStorage.setItem('arraySelected', JSON.stringify(arraySelected));
      this.emitter.emit(arraySelected);
    });
  }

  redirectTo(uri: string) {
    this.route
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.route.navigate([uri]));
  }

  ngAfterContentInit(): void {
    this.dtOptions = {
      dom: !this.showHeaderTable
        ? "<'row'<'col-2'i><'col-2 pt-2'l><'col-6 pt-2'f>>" +
          "<'row'<'col-12'tr>>" +
          "<'row'<'col-12 d-flex justify-content-center'p>>"
        : '<"bottom"t <"d-flex justify-content-center" p>>',
      pagingType: 'full_numbers',
      language: {
        lengthMenu: 'Mostrar _MENU_',
        search: '',
        searchPlaceholder: 'Buscar',
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
    this.initModelingSitesMasterToggle();
  }

  // table loaded sites
  private initModelingSitesMasterToggle(): void {
    console.log(this.dataSource);
    if (!this.sharedService.isNullOrUndefined(this.dataSource)) {
      this.dataSource.forEach((item: any) => {
        this.allSelectedLoadedSitesModel.push({
          data: item,
          selected: false,
        });
      });
      console.log(this.allSelectedLoadedSitesModel);
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleJ() {
    if (this.isAllSelectedJ()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabelJ(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedJ() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  setSelection(data: any[]): void {
    this.selection = new SelectionModel(true, [...data]);
  }
}
