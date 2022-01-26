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
