import { ChartComponentOptions } from 'src/app/models/ChartOptions';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};
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
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: any;
  public selected: string = '';

  chartCircular: ChartComponentOptions = {
    data: [30, 22],
    title: 'Total cumplido',
    colors: ['#dbe442', '#8246af'],
    labels: ['l', 'll'],
    chartType: 'doughnut',
    width: 150,
    height: 150,
    class: 'chart-container shadow',
  };

  constructor() {
    this.chartOptions = {
      legend: {
        show: true,
      },
      series: [
        {
          name: 'Venta total',
          data: [100000, 150000, 350000, 400000],
          color: '#8246af',
        },
        {
          name: 'Meta de venta',
          data: [1000, 100000, 360000],
          color: '#dbe442',
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      },
      // yaxis: {
      //   categories: ['1000', '100000', '0', '0'],
      // },
    };
  }

  ngOnInit(): void {}
}
