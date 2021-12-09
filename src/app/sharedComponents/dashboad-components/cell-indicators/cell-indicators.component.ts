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
  public contentLabels = 'accounts.accounts-dashboard.';
  public selected: string = '';
  public months: string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];

  public chartProps: ChartComponentOptions = {
    data: [
      { data: [165, 159, 280, 281, 356, 255, 240], label: 'Enviadas' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'En proceso' },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Cerradas',
      },
    ],
    colors: [
      {
        // enviadas
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#8246AF',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#8246AF',
        pointHoverBackgroundColor: '#8246AF',
        pointHoverBorderColor: '#8246AF',
      },
      {
        // en proceso
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#2E94F7',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#2E94F7',
        pointHoverBackgroundColor: '#2E94F7',
        pointHoverBorderColor: '#2E94F7',
      },
      {
        // cerradas
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#09C47C',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#09C47C',
        pointHoverBackgroundColor: '#09C47C',
        pointHoverBorderColor: '#09C47C',
      },
    ],
    labels: this.months,
    chartType: 'line',
    width: 650,
    height: 180,
    class: 'chart-container-line',
  };

  constructor() {}

  ngOnInit(): void {}
}
