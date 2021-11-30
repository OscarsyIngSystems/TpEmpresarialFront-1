import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layaut-accounts',
  templateUrl: './layaut-accounts.component.html',
  styleUrls: ['./layaut-accounts.component.scss'],
})
export class LayautAccountsComponent implements OnInit {
  @ViewChild('drawerRight') right!: MatSidenav;
  @ViewChild('drawer') drawer!: MatSidenav;
  hasBackdrop = true;
  constructor() {}

  ngOnInit(): void {}

  public toggleRight(event: boolean): void {
    this.hasBackdrop = event;
    this.right.toggle();
  }
  public toggle(event: boolean): void {
    this.hasBackdrop = event;
    this.drawer.toggle();
  }
}
