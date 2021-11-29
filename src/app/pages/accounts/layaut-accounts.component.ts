import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layaut-accounts',
  templateUrl: './layaut-accounts.component.html',
  styleUrls: ['./layaut-accounts.component.scss'],
})
export class LayautAccountsComponent implements OnInit {
  public toggled: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public toggle(): void {
    this.toggled = !this.toggled;
  }
}
