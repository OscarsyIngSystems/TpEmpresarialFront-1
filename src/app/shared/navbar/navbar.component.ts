import { NavigationStart, Router } from '@angular/router';
import { Sale } from './../../models/sale';
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
  @Output() emiterRight = new EventEmitter();

  profileColor!: string;
  hasBackdrop = true;
  user!: User;
  lang: Language = JSON.parse(JSON.stringify(localStorage.getItem('lang')));
  countries: Language[] = LANGS;
  countryFlag = '';
  searchData = new FormControl();
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
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;
  currentUrl = '';

  constructor(private translate: TranslateService, private router: Router) {
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
      name: 'Raul',
      lastName: 'Cruz',
    };

    this.loadOptions(); // se encarga de mapear las opciones del autocomplete
    this.showHide(); // se encarga de mostrar u ocultar la barra

    this.randomColor(10);
  }

  public show(): boolean {
    const blacklist = ['/login', '/'];
    return blacklist.includes(this.currentUrl);
  }

  private async showHide(): Promise<any> {
    this.currentUrl = this.router.url;

    await this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
      }
    });
  }

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

  public displayMenu(): void {
    this.hasBackdrop = true;
    this.emiter.emit(this.hasBackdrop);
  }
  public displayNotification(): void {
    this.hasBackdrop = false;
    this.emiterRight.emit(this.hasBackdrop);
  }
  public getInitials(): string {
    return this.user.name.substr(0, 1) + ' ' + this.user.lastName.substr(0, 1);
  }

  get countNotifications(): string | number {
    const notificationsLength = 10; // this.notifications.length;
    return notificationsLength > 99 ? '99+' : notificationsLength;
  }

  public selectCountry(language: Language): void {
    localStorage.setItem('lang', JSON.stringify(language));
    this.translate.use(language.code);
    this.countryFlag = language.img;
  }

  public clearSearch(): void {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }

  randomColor(brightness: number) {
    this.profileColor =
      '#' +
      this.randomChannel(brightness) +
      this.randomChannel(brightness) +
      this.randomChannel(brightness);
  }

  randomChannel(brightness: number) {
    var r = 255 - brightness;
    var n = 0 | (Math.random() * r + brightness);
    var s = n.toString(16);
    return s.length == 1 ? '0' + s : s;
  }

  logout() {
    localStorage.removeItem('tsoptok');
    this.router.navigate(['/login']);
  }
}
