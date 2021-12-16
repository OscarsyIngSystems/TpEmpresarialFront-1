import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  toolbar: any;
};

@Component({
  selector: 'app-oportunities',
  templateUrl: './oportunities.component.html',
  styleUrls: ['./oportunities.component.scss'],
})
export class OportunitiesComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;
  private colors = [
    '#59cbe8',
    '#8246af',
    '#f04e98',
    '#e4002b',
    '#FFBF3F',
    '#dbe442',
  ];

  doughnutChartProps: ChartComponentOptions = {
    title: 'Total de oportunidades',
    data: [3, 5, 1, 1, 1, 1],
    colors: ['#7E84D0', '#0595FF', '#5E5A6A', '#7ED1CA', '#93C2CE', '#E5AB4E'],
    labels: [
      'Necesidades',
      'Disenio',
      'Propuesta',
      'Firma',
      'Credito',
      'Ganada',
    ],
    chartType: 'doughnut',
    width: 150,
    height: 150,
    class: 'chart-container shadow',
  };
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'distibuted',
          data: [21, 22, 10, 28, 16, 21],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 180,
        type: 'bar',
      },
      colors: this.colors,
      plotOptions: {
        bar: {
          columnWidth: '35%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          'Necesidades',
          'Diseno',
          'Propuesta',
          'Firma',
          'Credito',
          'Ganada',
        ],
        labels: {
          style: {
            // colors: this.colors,
            fontSize: '10px',
          },
        },
      },
    };
  }

  ngOnInit(): void {}
}
