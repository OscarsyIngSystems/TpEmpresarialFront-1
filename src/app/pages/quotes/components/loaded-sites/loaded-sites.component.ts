import { Quote } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Sale } from 'src/app/models/sale';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { DialogLoadSitesComponent } from '../dialogs/dialog-load-sites/dialog-load-sites.component';

@Component({
  selector: 'app-loaded-sites',
  templateUrl: './loaded-sites.component.html',
  styleUrls: ['./loaded-sites.component.scss'],
})
export class LoadedSitesComponent implements OnInit {
  public contentLabels = 'quotes.';
  filterParam: FormControl = new FormControl('0');
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
      name: 'Vigencia cotización',
      value: '19/11/2021',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio Aparicio Contreras',
    },
  ];

  columns: string[] = [
    'check',
    'numberList',
    'site',
    'coverage',
    'accessMedia',
    'action',
  ];
  // data = [
  //   {
  //     numberList: 1,
  //     site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
  //     coverage: 'Con cobertura',
  //     accessMedia: 'Fibra',
  //   },
  //   {
  //     numberList: 2,
  //     site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
  //     coverage: 'Con cobertura',
  //     accessMedia: 'Microonda',
  //   },
  //   {
  //     numberList: 3,
  //     site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
  //     coverage: 'Con cobertura',
  //     accessMedia: 'Fibra',
  //   },
  //   {
  //     numberList: 4,
  //     site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
  //     coverage: 'Con cobertura',
  //     accessMedia: 'N/D',
  //   },
  // ];

  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;

  constructor(private dlg: MatDialog, private chRef: ChangeDetectorRef, private service:QuotesService) {
    this.lastValue = this.filterParam.value;
    // this.dataSource.data = this.data;
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = this.filterPredicate
    this.getData()
  }

  getData() {
    this.service.getData().subscribe((data) => {
      this.dataSource.data = data

    })
  }

  public setSearchId(id: number): void {
    this.selectedIdOption = id;
  }

  public search(): void {
    alert('Buscando... ' + this.searchData.value);
  }

  clearSearch() {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }


  onFilter(filterValue:string) {
    this.dataSource.filter = filterValue
  }

  filterPredicate(data:any, filter: string) {
    let datas = JSON.stringify(data).includes(filter);
    return datas
  }

  openDialog() {
    this.dlg.open(DialogLoadSitesComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'custom-dd',
    });
  }
}
