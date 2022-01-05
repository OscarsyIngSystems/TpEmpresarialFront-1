import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';

@Component({
  selector: 'app-variable-payment',
  templateUrl: './variable-payment.component.html',
  styleUrls: ['./variable-payment.component.scss'],
})
export class VariablePaymentComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  public payments = [
    [
      {
        id: 1,
        month: 'Julio',
        amount: 1000000,
      },
      {
        id: 2,
        month: 'Agosto',
        amount: 2500000,
      },
      {
        id: 3,
        month: 'Septiembre',
        amount: 10000000,
      },
    ],
    [
      {
        id: 4,
        month: 'Octubre',
        amount: 1000000,
      },
      {
        id: 5,
        month: 'Noviembre',
        amount: 2500000,
      },
      {
        id: 6,
        month: 'Diciembre',
        amount: 10000000,
      },
    ],
  ];
  public donutChartOptions: any;
  chartSeries = [160990, 56990];

  public colors = ['#9bd3dd', '#846b99'];
  labels = ['l', 'll', 'lll'];

  constructor() {
    this.donutChartOptions = {
      colors: this.colors,
      chart: {
        type: 'donut',
        width: 130,
        height: 130,
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
