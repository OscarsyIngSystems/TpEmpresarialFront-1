import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-modeling-sites',
  templateUrl: './modeling-sites.component.html',
  styleUrls: ['./modeling-sites.component.scss'],
})
export class ModelingSitesComponent implements OnInit {
  searchData = new FormControl();
  public contentLabels = 'quotes.';
  selectedIdOption = 0;
  filteredOptions: Observable<any[]> | undefined;
  options: any[] = [
    { id: 1, name: 'Audi', type: 'Oportunidad', location: 'CDMX' },
    { id: 2, name: 'Audi', type: 'Cotización', location: 'Polanco' },
    { id: 3, name: 'Audi', type: 'Cuenta', location: 'Guadalajara' },
    { id: 4, name: 'FEMSA', type: 'Cuenta', location: 'CDMX' },
    { id: 5, name: 'OXXO', type: 'Cotización', location: 'Monterrey' },
    { id: 6, name: 'Grupo Carso', type: 'Oportunidad', location: 'CDMX' },
    { id: 7, name: 'Penafiel', type: 'Oportunidad', location: 'Puebla' },
    { id: 8, name: 'Culiacan Inn', type: 'Cotización', location: 'Sinaloa' },
  ];

  dataPartner = {
    columnsShow: [
      {
        key: 'site',
        columName: this.contentLabels + 'table-modeling.colum1',
      },
      {
        key: 'accesMedia',
        columName: this.contentLabels + 'table-modeling.colum2',
      },
      {
        key: 'services',
        columName: this.contentLabels + 'table-modeling.colum3',
      },
      {
        key: 'quantity',
        columName: this.contentLabels + 'table-modeling.colum4',
      },
      {
        key: 'addons',
        columName: this.contentLabels + 'table-modeling.colum5',
      },
      {
        key: 'servicesCost',
        columName: this.contentLabels + 'table-modeling.colum6',
      },
      {
        key: 'overCost',
        columName: this.contentLabels + 'table-modeling.colum7',
      },
      {
        key: 'discont',
        columName: this.contentLabels + 'table-modeling.colum8',
      },
      {
        key: 'costSent',
        columName: this.contentLabels + 'table-modeling.colum9',
      },
      {
        key: 'subtotal',
        columName: this.contentLabels + 'table-modeling.colum10',
      },
      {
        key: 'total',
        columName: this.contentLabels + 'table-modeling.colum11',
      },
    ],
    dataSource: [
      {
        site: 'Audi Polanco',
        accessMedia: 'Fibra',
        services: '',
        quantity: '',
        addons: '',
        servicesCost: '$100000',
        overCost: '',
        discont: '',
        costSent: 'Producto fuera de catalogo',
        subtotal: '$1200000',
        total: '$1213131322',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    this.loadOptions(); // se encarga de mapear las opciones del autocomplete
  }
  public search(): void {
    alert('Buscando... ' + this.searchData.value);
  }

  public clearSearch(): void {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }

  public setSearchId(id: number): void {
    this.selectedIdOption = id;
  }

  private loadOptions(): void {
    this.filteredOptions = this.searchData.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      (option: any) =>
        option.name.toLowerCase().includes(filterValue) ||
        option.location.toLocaleLowerCase().includes(filterValue) ||
        option.type.toLocaleLowerCase().includes(filterValue)
    );
  }
}
