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
import { DialogEditLoadSitesComponent } from '../dialogs/dialog-edit-load-sites/dialog-edit-load-sites.component';
import { DialogLoadSitesComponent } from '../dialogs/dialog-load-sites/dialog-load-sites.component';
// import { DialogSendSitesComponent } from '../dialogs/dialog-send-sites/dialog-send-sites.component';

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
      name: 'Numero de la oportunidad',
      value: '0755222',
    },
    {
      name: 'Folio de la cotización',
      value: 'COT3781611',
    },
    {
      name: 'Vigencia de la cotización',
      value: '19/11/2021',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio Aparicio Contreras',
    },
  ];
  columns: string[] = [
    'check',
    'site',
    'coverage',
    'accessMedia',
    'edit',
  ];

  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;
  control: FormControl = new FormControl();

  constructor(
    private service: QuotesService,
    public storageService: StorageService,
    private dlg: MatDialog,
    private router: Router
  ) {}

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

  getData(): void {
    this.service.getData().subscribe((data) => {
      this.originalData = data;
      this.dataSource.data = this.originalData;
    });
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

  openDialog(): void {
    this.dlg.open(DialogLoadSitesComponent, {
      panelClass: 'custom-cc',
    });
  }

  onEdit(): void {
    this.dlg.open(DialogEditLoadSitesComponent, {
      panelClass: 'full-screen-modal'
    });
  }

  public onSendSites() {
    this.dlg.open(DialogLoadSitesComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'custom-dd'
    });
  }
}
