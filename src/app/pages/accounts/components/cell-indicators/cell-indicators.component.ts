import { ChartComponentOptions } from 'src/app/models/ChartOptions';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-indicators',
  templateUrl: './cell-indicators.component.html',
  styleUrls: ['./cell-indicators.component.scss'],
})
export class CellIndicatorsComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  public chartProps!: ChartComponentOptions;
  public payments = [[], []];
  constructor() {}

  ngOnInit(): void {
    this.chartProps = {
      data: [3, 5, 1, 1, 1, 1],
      colors: [
        '#7E84D0',
        '#0595FF',
        '#5E5A6A',
        '#7ED1CA',
        '#93C2CE',
        '#E5AB4E',
      ],
      labels: [''],
      chartType: 'line',
      width: 500,
      height: 200,
      class: 'chart-container-line',
    };
  }
}
