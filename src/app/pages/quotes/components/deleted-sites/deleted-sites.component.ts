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
  filterValue: string = '';
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
  columns: string[] = ['check','index','site','coverage','accessMedia','edit'];
  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;

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

  getData() {
    this.service.getData().subscribe(() => {
      let u = localStorage.getItem('array_selected')
      const array_selected = u ? JSON.parse(u) : []
      this.dataSource.data = array_selected;
      // localStorage.removeItem('array_selected')
    });
  }

  public setSearchId(id: number): void {
    this.selectedIdOption = id;
  }

  public search(): void {
    alert('Buscando... ' + this.searchData.value);
  }

  onReset() {
    this.router.navigate(['/quotes/loaded-sites'])
  }

  clearSearch() {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }

  onFilter(filterValues: string) {
    this.filterValue = filterValues;
    this.dataSource.filter = filterValues;
    console.log(this.filterParam.value);
  }

  filterPredicate(data: any, filter: string) {
    let datas = JSON.stringify(data).includes(filter);
    return datas;
  }

  openDialog() {
    this.dlg.open(DialogLoadSitesComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'custom-dd',
    });
  }
}
