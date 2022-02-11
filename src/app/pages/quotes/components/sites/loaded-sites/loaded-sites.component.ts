import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Sale } from 'src/app/models/sale';
import { StorageService } from 'src/app/services/shared/storage.service';
import { DialogEditLoadSitesComponent } from '../../dialogs/dialog-edit-load-sites/dialog-edit-load-sites.component';
import { DialogLoadSitesComponent } from '../../dialogs/dialog-load-sites/dialog-load-sites.component';

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
  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;
  control: FormControl = new FormControl();
  arraySelected: any[] = [];
  disabled: boolean = false;

  constructor(
    // private service: QuotesService,
    public storageService: StorageService,
    private dlg: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
    this.dataSource.filterPredicate = this.filterPredicate;
    this.storageService.setDataName('AUDI 1 COT | 2 SITIOS');
  }

  deleteSelectedItems(): void {
    const u = localStorage.getItem('arraySelected');
    const arraySelected = u ? JSON.parse(u) : [];
    arraySelected.forEach((element: any) => {
      const index = this.originalData.findIndex((site) => {
        return site.numberList === element.numberList;
      });
      if (index > -1) {
        this.originalData.splice(index, 1);
      }
    });
    this.dataSource.data = this.originalData;
    localStorage.setItem('loaded-sites', JSON.stringify(this.filteredData));

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
    this.originalData = [
      {
        numberList: 1,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Fibra',
        color: '#E6FAE9',
        active: false,
      },
      {
        numberList: 2,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Microonda',
        color: '#EBF1FA',
        active: false,
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Metro',
        color: '#eee8f3',
        active: false,
      },
      {
        numberList: 4,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Fibra',
        color: '#E6FAE9',
        active: false,
      },
      {
        numberList: 5,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Sin cobertura',
        accessMedia: 'N/D',
        color: '#fbf4e7',
        active: false,
      },
    ];
    localStorage.setItem('loaded-sites', JSON.stringify(this.originalData));
    const loaded_sites = localStorage.getItem('loaded-sites');
    const arraySelected = localStorage.getItem('arraySelected');
    console.log(loaded_sites);

    this.originalData = loaded_sites ? JSON.parse(loaded_sites) : [];
    const deletedFiles = arraySelected ? JSON.parse(arraySelected) : [];

    if (deletedFiles?.length > 0) {
      //eliminacion del datasource

      deletedFiles.forEach((element: any) => {
        console.log(element);

        const index = this.originalData.findIndex((site) => {
          console.log(site.numberList, element.numberList);

          return site.numberList === element.numberList;
        });
        if (index > -1) {
          this.originalData.splice(index, 1);
        }
      });
      console.log(this.originalData);
      this.dataSource.data = this.originalData;
    } else {
      this.dataSource.data = this.originalData;
      console.log(this.originalData);
    }
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
      data: {
        text: 'Sitios enviados para modelacion de propuesta.',
        length: this.arraySelected.length,
      },
    });
  }
}
