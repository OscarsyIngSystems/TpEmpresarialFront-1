import { Component, OnInit } from '@angular/core';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';

@Component({
  selector: 'app-segment-account',
  templateUrl: './segment-account.component.html',
  styleUrls: ['./segment-account.component.scss'],
})
export class SegmentAccountComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';
  chartProps: ChartComponentOptions = {
    data: [7, 2, 3],
    title: 'Cuentas',
    colors: ['#3B4559', '#6F92D8', '#B1B1B1'],
    labels: ['l', 'll', 'lll'],
  };
  constructor() {}

  ngOnInit(): void {}
}
