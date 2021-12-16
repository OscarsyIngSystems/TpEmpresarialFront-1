import { Component, OnInit, ViewChild } from '@angular/core';
// import { ChartComponentOptions } from 'src/app/models/ChartOptions';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';

  /* Inservible por el momento
  // chartProps: ChartComponentOptions = {
  //   data: [3, 4, 7],
  //   title: 'Cuentas',
  //   colors: ['#59cbe8', '#f04e98', '#8246af'],
  //   labels: ['Casa de productos', 'Building Blocks', 'Mixta'],
  //   chartType: 'doughnut',
  //   width: 100,
  //   height: 100,
  //   class: 'chart-container shadow',
   };*/

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: any;
  private colors = ['#f04e98', '#59cbe8', '#8246af'];
  public chartSeries = [
    [4, 3, 1],
    [7, 4, 4],
    [4, 3, 0],
  ];

  constructor() {
    this.chartOptions = {
      // series: [4, 3, 1], //se comenta porque utilizo chartSeries para dar valores diferentes a cada chart
      colors: this.colors,
      chart: {
        type: 'donut',
        width: 100,
        height: 100,
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
      labels: ['Building Blocks', 'Casa de Productos', 'Mixta'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
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
