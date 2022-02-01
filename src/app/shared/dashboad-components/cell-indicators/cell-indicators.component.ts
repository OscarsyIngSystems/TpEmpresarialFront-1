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
  public donutChartOptions: any;
  chartSeries = [30, 22];
  amounts = ['- $360,720', '- $280,100', '- $600,250'];
  title = 'Cuentas';
  public colors = ['#846b99', '#9bd3dd'];
  labels = ['l', 'll', 'lll'];
  today = new Date();

  constructor() {
    this.chartOptions = {
      legend: {
        show: true,
      },
      series: [
        {
          name: 'Venta total',
          data: [1000, 160000, 100000],
          color: '#846b99',
        },
         {
           name: 'Meta de venta',
          data: [0,100000, 200000, 300000, 400000],
          color: '#98D3DD',
         },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 170,
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
    this.donutChartOptions = {
      colors: this.colors,
      chart: {
        type: 'donut',
        width: 140,
        height: 140,
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
                formatter: function (val: any) {
                  const venta = val.globals.series[1];
                  const meta = val.globals.series[0];
                  return ((venta * 100) / meta).toFixed(0) + '%';
                },
              },
            },
          },
        },
      },
    };
  }

  ngOnInit(): void {}
}
