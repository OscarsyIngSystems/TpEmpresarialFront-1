import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layaut-quotes',
  templateUrl: './layaut-quotes.component.html',
  styleUrls: ['./layaut-quotes.component.scss'],
})
export class LayautQuotesComponent implements OnInit {
  public contentLabels = 'quotes.layaut-quotes.';

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
