import { ChartComponentOptions } from 'src/app/models/ChartOptions';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-indicators',
  templateUrl: './cell-indicators.component.html',
  styleUrls: ['./cell-indicators.component.scss'],
  // host: {
  //   '(window:resize)': 'onResize($event)',
  // },
})
export class CellIndicatorsComponent implements OnInit {
  // @HostListener('window:resize', ['onResize($event)'])
  public contentLabels = 'accounts.accounts-dashboard.';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  public chartProps: ChartComponentOptions = {
    data: [3, 5, 10, 13, 18, 0],
    colors: ['#7E84D0', '#0595FF', '#5E5A6A', '#7ED1CA', '#93C2CE', '#E5AB4E'],
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    chartType: 'line',
    width: 500,
    height: 150,
    class: 'chart-container-line',
  };

  public selected: string = '';

  constructor() {}

  ngOnInit(): void {}
}
