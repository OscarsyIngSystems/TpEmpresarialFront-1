import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Sale } from 'src/app/models/sale';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-load-sites',
  templateUrl: './load-sites.component.html',
  styleUrls: ['./load-sites.component.scss'],
})
export class LoadSitesComponent implements OnInit {
  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;
  options: Sale[] = [
    { id: 1, name: 'Audi', type: 'Oportunidad', location: 'CDMX' },
    { id: 2, name: 'Audi', type: 'Cotizacion', location: 'Polanco' },
    { id: 3, name: 'Audi', type: 'Cuenta', location: 'Guadalajara' },
    { id: 4, name: 'FEMSA', type: 'Cuenta', location: 'CDMX' },
    { id: 5, name: 'OXXO', type: 'Cotizacion', location: 'Monterrey' },
    { id: 6, name: 'Grupo Carso', type: 'Oportunidad', location: 'CDMX' },
    { id: 7, name: 'Penafiel', type: 'Oportunidad', location: 'Puebla' },
    { id: 8, name: 'Culiacan Inn', type: 'Cotizacion', location: 'Sinaloa' },
  ];
  constructor() {
    this.loadOptions();
  }

  ngOnInit(): void {}

  public search(): void {
    alert('Buscando... ' + this.searchData.value);
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

  private _filter(value: string): Sale[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      (option: Sale) =>
        option.name.toLowerCase().includes(filterValue) ||
        option.location.toLocaleLowerCase().includes(filterValue) ||
        option.type.toLocaleLowerCase().includes(filterValue)
    );
  }

  clearSearch() {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }
}
