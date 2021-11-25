import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TpEmpresarialFront';
  constructor(translate: TranslateService) {
    let lang = JSON.parse(JSON.stringify(localStorage.getItem('lang')));

    lang = JSON.parse(lang);

    // console.log(lang);
    translate.setDefaultLang('es-mx');
    translate.use('es-mx');

    if (lang) {
      translate.use(lang.code);
    } else {
      translate.use('es-mx');
    }
  }
}
