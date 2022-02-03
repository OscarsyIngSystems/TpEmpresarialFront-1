import { Router, NavigationStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  currentUrl = '';
  role: number = 0;
  constructor(private router: Router) {
    this.showHide();
  }

  ngOnInit(): void {
    this.getRole()
  }

  getRole() {
    this.role = Number(localStorage.getItem('role'))
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
