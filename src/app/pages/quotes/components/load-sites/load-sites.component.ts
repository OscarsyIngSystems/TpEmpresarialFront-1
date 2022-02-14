import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Sale } from 'src/app/models/sale';
import { map, startWith } from 'rxjs/operators';
import { InfoDetail } from 'src/app/models/infoDetail';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoadSitesComponent } from '../dialogs/dialog-load-sites/dialog-load-sites.component';
import { DialogSendSitesComponent } from '../dialogs/dialog-send-sites/dialog-send-sites.component';

@Component({
  selector: 'app-load-sites',
  templateUrl: './load-sites.component.html',
  styleUrls: ['./load-sites.component.scss'],
})
export class LoadSitesComponent implements OnInit {
  lat = 19.3344076;
  lng = -99.19845343;
  zoom = 17;
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
  searchData = new FormControl('', Validators.required);
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;
  options: Sale[] = [
    { id: 1, name: 'Audi', type: 'Oportunidad', location: 'CDMX' },
    { id: 2, name: 'Audi', type: 'Cotización', location: 'Polanco' },
    { id: 3, name: 'Audi', type: 'Cuenta', location: 'Guadalajara' },
    { id: 4, name: 'FEMSA', type: 'Cuenta', location: 'CDMX' },
    { id: 5, name: 'OXXO', type: 'Cotización', location: 'Monterrey' },
    { id: 6, name: 'Grupo Carso', type: 'Oportunidad', location: 'CDMX' },
    { id: 7, name: 'Penafiel', type: 'Oportunidad', location: 'Puebla' },
    { id: 8, name: 'Culiacan Inn', type: 'Cotización', location: 'Sinaloa' },
  ];
  constructor(private dlg: MatDialog) {
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

  public openDialog() {
    this.dlg.open(DialogSendSitesComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'custom-dd',
    });
  }
  clearSearch() {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }
}
