import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layaut-accounts',
  templateUrl: './layaut-accounts.component.html',
  styleUrls: ['./layaut-accounts.component.scss'],
})
export class LayautAccountsComponent implements OnInit {
  public open: boolean = false;
  @ViewChild('drawerRight') right: any;
  @ViewChild('drawer') drawer: any;
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
