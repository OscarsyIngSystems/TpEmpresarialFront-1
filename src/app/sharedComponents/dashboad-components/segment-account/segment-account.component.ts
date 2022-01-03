import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';

@Component({
  selector: 'app-segment-account',
  templateUrl: './segment-account.component.html',
  styleUrls: ['./segment-account.component.scss'],
})
export class SegmentAccountComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';

  public donutChartOptions: any;
  chartSeries = [7, 2, 5, 4];
  amounts = ['- $360,720', '- $280,100', '- $600,250', '- $123,122'];
  title = 'Cuentas';
  public colors = ['#3b4559', '#9bd3dd', '#b1b3b3', '#839AC7'];
  labels = ['l', 'll', 'lll', 'IV'];

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
              },
            },
          },
        },
      },
    };
  }

  ngOnInit(): void {}
}
