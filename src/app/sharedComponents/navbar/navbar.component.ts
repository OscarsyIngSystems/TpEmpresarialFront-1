import { Observable } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/models/Language';
import { User } from 'src/app/models/User';
import { LANGS } from 'src/assets/i18n/constants';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() emiter = new EventEmitter();

  user!: User;
  lang: Language = JSON.parse(JSON.stringify(localStorage.getItem('lang')));
  countries: Language[] = LANGS;
  countryFlag = '';
  searchData = new FormControl();
  options: string[] = [
    'Audi CDMX',
    'Audi Polanco',
    'Audi Lomas',
    'BMW Polanco',
    'Mercedes Benz Pedregal',
  ];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.lang = JSON.parse(lang);
    }

    if (lang) {
      this.countryFlag = this.lang.img;
    } else {
      this.countryFlag = '../../../assets/img/mexico-circular.png';
    }

    this.user = {
      name: 'John',
      lastName: 'Doe',
    };

    this.loadOptions();
  }

  public search(): void {
    console.log(this.searchData.value); // Valor del formulario para la busqueda
    alert('Buscando... ' + this.searchData.value);
  }

  private loadOptions(): void {
    this.filteredOptions = this.searchData.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  public displayMenu(): void {
    this.emiter.emit(true);
  }

  public getInitials(): string {
    return this.user.name.substr(0, 1) + ' ' + this.user.lastName.substr(0, 1);
  }

  get countNotifications(): string | number {
    const notificationsLength = 100; // this.notifications.length;
    return notificationsLength > 99 ? '99+' : notificationsLength;
  }

  public selectCountry(language: Language): void {
    console.log(language);

    localStorage.setItem('lang', JSON.stringify(language));
    this.translate.use(language.code);
    this.countryFlag = language.img;
  }
}
