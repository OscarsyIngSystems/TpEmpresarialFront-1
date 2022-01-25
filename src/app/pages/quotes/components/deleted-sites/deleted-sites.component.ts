import { DialogDeletedSitesComponent } from './../dialogs/dialog-deleted-sites/dialog-deleted-sites.component';
import { Component, OnInit, ChangeDetectionStrategy, } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Sale } from 'src/app/models/sale';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-deleted-sites',
  templateUrl: './deleted-sites.component.html',
  styleUrls: ['./deleted-sites.component.scss'],
})
export class DeletedSitesComponent implements OnInit {
  public contentLabels = 'quotes.';
  // filterValue = '';
  dataSource = new MatTableDataSource();
  filteredData: any[] = [];
  originalData: any[] = [];
  filters: string[] = [];
  filterParam: FormControl = new FormControl('0');
  lastValue: number;
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'Número de la oportunidad',
      value: '0755222',
    },
    {
      name: 'Folio de la cotización',
      value: 'COT3781611',
    },
    {
      name: 'Vigencia de la cotización',
      value: '19/11/2022',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio Aparicio Contreras',
    },
  ];
  columns: string[] = ['check', 'index', 'site', 'coverage', 'accessMedia'];
  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  control: FormControl = new FormControl();
  selectedIdOption = 0;

  selection = new SelectionModel(true, [...this.dataSource.data]);
  selectedItemsTable: any[] = [];
  disabled: boolean = true;
  selectedLength: number = 0
  constructor(
    private service: QuotesService,
    private dlg: MatDialog,
    public router: Router,
    public storageService: StorageService
  ) {
    this.lastValue = this.filterParam.value;
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = this.filterPredicate;
    this.storageService.setDataName('AUDI 1 COT | 2 SITIOS');
    this.getData();
  }

  onFilter(filterValues: string): void {
    if (!this.filters.includes(filterValues)) {
      this.filters.push(filterValues);
    } else {
      const index = this.filters.indexOf(filterValues);
      this.filters.splice(index, 1);
    }
    if (this.filters.length === 0) {
      this.dataSource.data = this.originalData;
    } else {
      this.filteredData = this.originalData.filter((site) => {
        return this.filters.includes(site.accessMedia);
      });
      this.dataSource.data = this.filteredData;
    }
  }

  getData(): void {
    this.service.getData().subscribe(() => {
      const u = localStorage.getItem('arraySelected');
      const arraySelected = u ? JSON.parse(u) : [];
      this.originalData = arraySelected;
      this.dataSource.data = this.originalData;
    });
  }

  public setSearchId(id: number): void {
    this.selectedIdOption = id;
  }

  public search(): void {
    alert('Buscando... ' + this.searchData.value);
  }

  onReset(): void {
    this.router.navigate(['/quotes/loaded-sites']);
  }

  clearSearch(): void {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }

  filterPredicate(data: any, filter: string): boolean {
    const datas = JSON.stringify(data).includes(filter);
    return datas;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => {
        this.selection.select(row);
      });
  }

  isAllSelected() {
    this.selectedItemsTable = this.selection.selected;

    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1
      }`;
  }

  checkDisabled(array:any[]) {
    if (array.length > 0) this.disabled = false;
    if (array.length == 0) this.disabled = true;
    this.selectedLength = array.length
    return array.length
  }

  openDialog(): void {
    this.dlg.open(DialogDeletedSitesComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'custom-dd',
      data: {'text': ' sitios agregados', 'length': this.selectedLength}
    });
    // setTimeout(() => {
      // this.router.navigate(['/quotes/loaded-sites'])
    // }, 500);

    // localStorage.removeItem('arraySelected')
  }
}
