import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.scss']
})

export class InstallationsComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: any;
  private colors = ['#3B4559', '#9BD3DD', '#B1B3B3','#839AC7'];
  public chartSeries = [
    [4, 3, 1, 9],
    [7, 4, 4, 7],
    [4, 3, 3, 5],
    [4, 3, 7, 5],
  ];


  constructor() {
    this.chartOptions = {
      //series: [4, 3, 1], //se comenta porque utilizo chartSeries para dar valores diferentes a cada chart
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
      labels: ['Segmento I', 'Segmento II', 'Segmento III', 'Segmento IV'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70',
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

  ngOnInit(): void {
  }

}

