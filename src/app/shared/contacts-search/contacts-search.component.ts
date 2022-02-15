import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-contacts-search',
  templateUrl: './contacts-search.component.html',
  styleUrls: ['./contacts-search.component.scss'],
})
export class ContactsSearchComponent implements OnInit, AfterContentInit {
  public accountId;
  @Input() title: string = '';
  @Input() defaultValue: string = '';
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  searchData = new FormControl('', Validators.required);
  selectedOptions: any[] = [];
  selectedOption: string = '';
  filteredOptions!: Observable<any[]>;
  options = [
    { id: 1, name: 'Jose Juan', lastName: 'Robles' },
    { id: 2, name: 'Oscar', lastName: 'Serrano' },
    { id: 3, name: 'Leonardo', lastName: 'Maximo' },
    { id: 4, name: 'Miguel', lastName: 'Valente' },
    { id: 5, name: 'Eduardo', lastName: 'Osorio' },
  ];
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private router: Router, private _url: ActivatedRoute) {
    this.accountId = this._url.snapshot.paramMap.get('id');

    if (this.defaultValue !== '') {
      this.loadOptionsSimple();
    } else {
      this.loadOptions();
    }
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.searchData.setValue(this.defaultValue);
  }

  private loadOptions(): void {
    this.filteredOptions = this.searchData.valueChanges.pipe(
      startWith(null),
      map((item: any) => (item ? this._filter(item) : this.options.slice()))
    );
  }

  private _filter(value: any): any[] {
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();
      return this.options.filter(
        (option: any) =>
          option.name.toLowerCase().includes(filterValue) ||
          option.lastName.toLocaleLowerCase().includes(filterValue)
      );
    } else {
      return [];
    }
  }

  remove(item: any): void {
    const index = this.selectedOptions.indexOf(item);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    if (typeof event.input.value !== 'string') {
      this.selectedOptions.push(event.input.value);
      event.input.value = '';
      this.searchData.setValue(null);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.selectedOptions.includes(event.option.value)) {
      this.selectedOptions.push(event.option.value);
      this.searchInput.nativeElement.value = '';
      this.searchData.setValue(null);
      this.loadOptions();
    }
  }

  // para el buscador sin lista de chips

  private loadOptionsSimple(): void {
    this.filteredOptions = this.searchData.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filterSimple(value))
    );
  }
  private _filterSimple(value: string): any[] {
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
  public clearSearch(): void {
    this.selectedOption = '';
    this.searchData.setValue('');
  }
  public setSelectedOption(value: any): void {
    this.selectedOption = value;
  }
  public watchContactsList(): void {
    this.router.navigate([
      'accounts/related/' + this.accountId + '/bottom-tabs',
    ]);
  }
}
