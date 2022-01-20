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
import { DialogLoadSitesComponent } from '../dialogs/dialog-load-sites/dialog-load-sites.component';

@Component({
  selector: 'app-deleted-sites',
  templateUrl: './deleted-sites.component.html',
  styleUrls: ['./deleted-sites.component.scss'],
})
export class DeletedSitesComponent implements OnInit {
  public contentLabels = 'quotes.';
  filterParam: FormControl = new FormControl('0');
  filterValue = '';
  lastValue: number;
  dataSource = new MatTableDataSource();
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'Numero de la oportunidad',
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
  selectedIdOption = 0;
  control: FormControl = new FormControl();
  filteredData: any[] = [];
  originalData: any[] = [];
  filters: string[] = [];

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
      const u = localStorage.getItem('array_selected');
      const arraySelected = u ? JSON.parse(u) : [];
      this.originalData = arraySelected;
      this.dataSource.data = this.originalData;
      // localStorage.removeItem('array_selected')
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

  openDialog(): void {
    this.dlg.open(DialogLoadSitesComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'custom-dd',
    });
  }
}
