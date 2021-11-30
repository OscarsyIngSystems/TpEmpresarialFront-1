import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
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
