import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layaut-quotes',
  templateUrl: './layaut-quotes.component.html',
  styleUrls: ['./layaut-quotes.component.scss'],
})
export class LayautQuotesComponent implements OnInit {
  public open: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggle(): void {
    this.open = !this.open;
  }
}
