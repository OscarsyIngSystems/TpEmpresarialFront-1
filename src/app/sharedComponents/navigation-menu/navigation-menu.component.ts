import { Router, NavigationStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  currentUrl = '';
  constructor(private router: Router) {
    this.currentUrl = router.url;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit(): void {}
}
