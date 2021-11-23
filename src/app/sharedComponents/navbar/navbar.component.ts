import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/models/Language';
import { User } from 'src/app/models/User';
import { LANGS } from 'src/assets/i18n/constants';

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
  countryFlag: string = '';
  constructor(private translate: TranslateService) {
    console.log(this.lang);

    let perro = localStorage.getItem('lang');
    if (perro) {
      this.lang = JSON.parse(perro);
    }

    if (perro) {
      this.countryFlag = this.lang.img;
    } else {
      this.countryFlag = '../../../assets/img/mexico-circular.png';
    }

    this.user = {
      name: 'LORD',
      lastName: 'Jassiel',
    };
  }

  displayMenu(): void {
    this.emiter.emit(true);
  }

  getInitials(): string {
    return this.user.name.substr(0, 1) + ' ' + this.user.lastName.substr(0, 1);
  }

  get countNotifications(): string | number {
    let notificationsLength = 100; //this.notifications.length;
    return notificationsLength > 99 ? '99+' : notificationsLength;
  }

  selectCountry(language: Language): void {
    console.log(language);

    localStorage.setItem('lang', JSON.stringify(language));
    this.translate.use(language.code);
    this.countryFlag = language.img;
  }
}
