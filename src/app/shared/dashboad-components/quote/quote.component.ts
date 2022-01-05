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



  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: any;
  private colors = ['#9bd3dd', '#846b99', '#dddd9b'];
  public chartSeries = [
    [4, 3, 1],
    [7, 4, 4],
    [4, 3, 0],
  ];

  constructor() {
    this.chartOptions = {
      //series: [4, 3, 1], //se comenta porque utilizo chartSeries para dar valores diferentes a cada chart
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
