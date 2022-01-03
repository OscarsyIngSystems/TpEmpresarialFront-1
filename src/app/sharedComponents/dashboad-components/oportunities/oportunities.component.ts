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
  public barChartOptions: any;
  public donutChartOptions: any;
  private colors = [
    '#3b4549',
    '#9bd3dd',
    '#75787b',
    '#fcc565',
    '#846b99',
    '#dddd9b',
  ];
  public chartSeries = [21, 22, 10, 28, 16, 21];
  public labels = [
    'Necesidades',
    'Diseño',
    'Propuesta',
    'Firma',
    'Crédito',
    'Ganada',
  ];
  public title = 'Total de oportunidades';

  constructor() {
    this.barChartOptions = {
      series: [
        {
          name: '',
          data: this.chartSeries,
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
        categories: this.labels,
        labels: {
          style: {
            // colors: this.colors,
            fontSize: '10px',
          },
        },
      },
    };
    this.donutChartOptions = {
      colors: this.colors,
      chart: {
        type: 'donut',
        width: 150,
        height: 150,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            // legend: {
            //   position: 'bottom',
            // },
          },
        },
      ],
      labels: this.labels,
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '84',
            labels: {
              show: true,
              value: {
                show: true,
                fontSize: '15px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                // color: undefined,
                offsetY: -10,
                // formatter(val: any) {
                //   console.log(val);
                //   return val;
                // },
              },
              total: {
                show: true,
                showAlways: true,
                label: '',
              },
            },
          },
        },
      },
    };
  }

  ngOnInit(): void {}
}
