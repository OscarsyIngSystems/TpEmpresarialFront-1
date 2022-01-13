import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public contentLabels = 'accounts.layaut-accounts.';
  @ViewChild('drawerRight') right!: MatSidenav;
  @ViewChild('drawer') drawer!: MatSidenav;
  public panelOpenStateMenu = false;
  hasBackdrop = true;
  currentUrl = '';
  title = 'TpEmpresarialFront';
  constructor(translate: TranslateService, private router: Router) {
    let lang = JSON.parse(JSON.stringify(localStorage.getItem('lang')));

    lang = JSON.parse(lang);

    translate.setDefaultLang('es-mx');
    translate.use('es-mx');

    if (lang) {
      translate.use(lang.code);
    } else {
      translate.use('es-mx');
    }

    this.showHide();
  }

  public toggleRight(event: boolean): void {
    this.hasBackdrop = event;
    this.right.toggle();
  }
  public toggle(event: boolean): void {
    this.hasBackdrop = event;
    this.drawer.toggle();
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
}
