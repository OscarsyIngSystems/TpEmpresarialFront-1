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
      { data: [28, 56, 34, 80, 356], label: 'En proceso' },
    ],
    colors: [
      {
        // enviadas
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'lawngreen',
        pointBackgroundColor: '#FFF',
        pointBorderColor: 'lawngreen',
        pointHoverBackgroundColor: 'lawngreen',
        pointHoverBorderColor: 'lawngreen',
      },
      {
        // en proceso
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'violet',
        pointBackgroundColor: '#FFF',
        pointBorderColor: 'violet',
        pointHoverBackgroundColor: 'violet',
        pointHoverBorderColor: 'violet',
      },
    ],
    labels: this.months,
    chartType: 'line',
    width: 650,
    height: 180,
    class: 'chart-container-line',
  };

  chartCircular: ChartComponentOptions = {
    data: [30, 22],
    title: 'Total cumplido',
    colors: ['lawngreen', 'violet'],
    labels: ['l', 'll'],
    chartType: 'doughnut',
    width: 150,
    height: 150,
    class: 'chart-container shadow',
  };

  constructor() {}

  ngOnInit(): void {}
}
