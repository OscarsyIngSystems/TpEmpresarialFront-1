import { DialogDeletedSitesComponent } from './../../dialogs/dialog-deleted-sites/dialog-deleted-sites.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Sale } from 'src/app/models/sale';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { StorageService } from 'src/app/services/shared/storage.service';
import { DialogEditLoadSitesComponent } from '../../dialogs/dialog-edit-load-sites/dialog-edit-load-sites.component';
import { DialogLoadSitesComponent } from '../../dialogs/dialog-load-sites/dialog-load-sites.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-loaded-sites',
  templateUrl: './loaded-sites.component.html',
  styleUrls: ['./loaded-sites.component.scss'],
})
export class LoadedSitesComponent implements OnInit {
  public contentLabels = 'quotes.';
  filterValue = '';

  dataSource = new MatTableDataSource();
  filteredData: any[] = [];
  originalData: any[] = [];
  filters: string[] = [];
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
  columns: string[] = ['check', 'site', 'coverage', 'accessMedia', 'edit'];
  counters: any[] = [0,0,0,0]; // fibra. microonda, metro, sin cobertura
  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  control: FormControl = new FormControl();
  selectedIdOption = 0;
  selection = new SelectionModel(true, [...this.dataSource.data]);
  selectedItemsTable: any[] = [];
  arraySelected: any[] = [];
  disabled: boolean = false;

  constructor(
    private service: QuotesService,
    public storageService: StorageService,
    private dlg: MatDialog,
    private router: Router
  ) {}

  deleteSelectedItems(): void {
    const u = localStorage.getItem('arraySelected');
    const arraySelected = u ? JSON.parse(u) : [];
    arraySelected.forEach((element: any) => {
      const index = this.originalData.findIndex((site) => {
        return site.numberList === element.numberList;
      });
      if (index > -1) {
        this.originalData.splice(index, 1);
        this.reset();
      }
    });
    this.dataSource.data = this.originalData;
  }

  reset(): void {
    this.control.reset();
    this.filters = [];
  }

  ngOnInit(): void {
    this.getData();
    this.dataSource.filterPredicate = this.filterPredicate;
    this.storageService.setDataName('AUDI 1 COT | 2 SITIOS');
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

  onDeleteSites(): void {
    let dlgRef = this.dlg.open(DialogDeletedSitesComponent, {
      height: '35%',
      width: '30%',
      panelClass: 'container-cc',
      data: {
        length: this.selectedItemsTable.length,
        text: 'Sitios eliminados correctamente',
      },
    });
    dlgRef.afterClosed().subscribe((res) => {
      if(this.selection.selected.length == 1) {
        this.originalData = this.originalData.filter((site) => {
          return site !== this.selection.selected[0]
        });
        console.log('original',this.originalData)
        this.dataSource.data = this.originalData
        localStorage.setItem('arraySelected',JSON.stringify(this.selectedItemsTable))
      }
      if(this.selection.selected.length != 1) {
        this.selection.selected.filter((site) => {
          this.originalData = this.originalData.filter((sites) => {
          return sites !== site
        })
        // console.log('ooo',this.originalData)
        this.dataSource.data = this.originalData
        localStorage.setItem('arraySelected',JSON.stringify(this.selectedItemsTable))
        })
      }
    });
  }

  getData(): void {


    this.service.getData().subscribe((data) => {
      const u = localStorage.getItem('arraySelected');
      const arraySelected = u ? JSON.parse(u) : [];
      this.dataSource.data = data;
      if(u == '[]' || u == null ) {
        console.log('no tiene datos')
        this.originalData = data;
        this.dataSource.data = this.originalData;
      }
      if(arraySelected !== 1) {
        console.log('con 1',arraySelected)
        this.dataSource.data.filter((data:any) => {
          let jeje = arraySelected.filter((sites:any) => {
            return sites.numberList !== data.numberList
          })
          console.log('jeje',jeje)
        })

        // console.log(object);
        // arraySelected.filter((element: any) => {
          // console.log('ele',element)
          // let jee;
          // this.originalData = this.dataSource.data.filter((site:any) => {
          //   console.log('site',site)
          //   return site !== element
          // });
          // console.log('ORIGINAL',this.originalData)
          // this.dataSource.data = this.originalData
          // localStorage.setItem('arraySelected',JSON.stringify(this.dataSource.data))

        // });
        ;
      }


    });
  }

  checkDisabled() {
    const u = localStorage.getItem('arraySelected');
    this.arraySelected = u ? JSON.parse(u) : [];
    return this.arraySelected.length > 0;
  }

  public setSearchId(id: number): void {
    this.selectedIdOption = id;
  }

  public search(): void {
    alert('Buscando... ' + this.searchData.value);
  }

  onNavigate(): void {
    this.router.navigate(['/quotes/deleted-sites']);
  }

  clearSearch(): void {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }

  filterPredicate(data: any, filter: string): boolean {
    const datas = JSON.stringify(data).includes(filter);
    return datas;
  }

  isAllSelected() {
    if (this.selection.selected.length > 0) this.disabled = false;
    if (this.selection.selected.length == 0) this.disabled = true;
    this.selectedItemsTable = this.selection.selected;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => {
        this.selection.select(row);
      });
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1
      }`;
  }

  getCounter(data:any) {
    this.counters[0] = 0, this.counters[1] = 0, this.counters[2] = 0, this.counters[3] = 0;

    data.filter((site:any) => {
      // console.log(site);
      if(site['accessMedia'] == 'Fibra') this.counters[0] = ++this.counters[0]
      if(site['accessMedia'] == 'Microonda') this.counters[1] = ++this.counters[1]
      if(site['accessMedia'] == 'Metro') this.counters[1] = ++this.counters[2]
      if(site['accessMedia'] == 'N/D') this.counters[1] = ++this.counters[3]
    })
    console.log(this.counters)
  }

  openDialog(): void {
    this.dlg.open(DialogLoadSitesComponent, {
      panelClass: 'custom-cc',
    });
  }

  onEdit(): void {
    this.dlg.open(DialogEditLoadSitesComponent, {
      panelClass: 'full-screen-modal',
    });
  }

  public onSendSites() {
    this.dlg.open(DialogLoadSitesComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'custom-dd',
      data: {'text': 'Sitios enviados para modelacion de propuesta.', 'length':this.arraySelected.length}
    });
  }
}
