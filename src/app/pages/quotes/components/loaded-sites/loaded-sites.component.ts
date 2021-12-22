import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-loaded-sites',
  templateUrl: './loaded-sites.component.html',
  styleUrls: ['./loaded-sites.component.scss'],
})
export class LoadedSitesComponent implements OnInit {
  public contentLabels = 'quotes.';
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
  dataActivityHistory = {
    columnsShow: [
      {
        key: 'check',
        columnName: this.contentLabels + 'table-loaded-sites.colum1',
      },
      {
        key: 'numberList',
        columnName: this.contentLabels + 'table-loaded-sites.colum2',
      },
      {
        key: 'site',
        columnName: this.contentLabels + 'table-loaded-sites.colum3',
      },
      {
        key: 'coverage',
        columnName: this.contentLabels + 'table-loaded-sites.colum4',
      },
      {
        key: 'accessMedia',
        columnName: this.contentLabels + 'table-loaded-sites.colum5',
      },
      {
        key: 'action',
        columnName: this.contentLabels + 'table-loaded-sites.colum6',
      },
    ],
    dataSource: [
      {
        numberList: 1,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Fibra',
      },
      {
        numberList: 2,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Microonda',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Fibra',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Microonda',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Microonda',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'Microonda',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
      {
        numberList: 3,
        site: 'Audi Pedregal Anillo Periférico Boulevard 3539, San Jerónimo Aculco, La Magdalena Contreras, 10400 Ciudad de México, CDMX 19.335048, -99.19840699999',
        coverage: 'Con cobertura',
        accessMedia: 'N/D',
      },
    ],
  };

  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;

  constructor() {}

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
  ngOnInit(): void {}
}
