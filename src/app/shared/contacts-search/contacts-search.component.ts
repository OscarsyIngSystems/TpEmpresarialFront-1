import { FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-search',
  templateUrl: './contacts-search.component.html',
  styleUrls: ['./contacts-search.component.scss'],
})
export class ContactsSearchComponent implements OnInit {
  searchData = new FormControl('', Validators.required);
  @Input() textPlaceholder = 'Buscar contacto';
  selectedOption = '';
  filteredOptions: Observable<any[]> | undefined;
  options = [
    { id: 1, name: 'Jose Juan', lastName: 'Robles' },
    { id: 2, name: 'Oscar', lastName: 'Serrano' },
    { id: 3, name: 'Leonardo', lastName: 'Maximo' },
    { id: 4, name: 'Miguel', lastName: 'Valente' },
    { id: 5, name: 'Eduardo', lastName: 'Osorio' },
  ];

  constructor() {
    this.loadOptions();
  }

  ngOnInit(): void {}

  private loadOptions(): void {
    this.filteredOptions = this.searchData.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );
  }
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      (option: any) =>
        option.name.toLowerCase().includes(filterValue) ||
        option.lastName.toLocaleLowerCase().includes(filterValue)
    );
  }
  public search(): void {
    alert('Buscando... ' + this.searchData.value);
  }
  clearSearch(): void {
    this.selectedOption = '';
    this.searchData.setValue('');
  }
  public setSelectedOption(value: any): void {
    this.selectedOption = value;
  }
}
