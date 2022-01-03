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
  public chartOptionsTotal!: any;

  private colors = ['#3B4559', '#9BD3DD', '#B1B3B3','#839AC7'];
  public colorsTotal = ['#846B99', '#FCC565', '#DDDD9B'];
  public labelsTotal= ['Por instalar', 'En proceso', 'Instaladas', ]
  public chartSeries = [
    [4, 3, 1, 9],
    [7, 4, 4, 7],
    [4, 3, 3, 5],

  ];



  public  totalFinal = [0, 0,0];
  totalSum(){


    for (let i = 0; i < this.chartSeries.length; i++) {
      const element = this.chartSeries[i];

      element.map((item) => {
        this.totalFinal[i] += item
      })


    }
    console.log(this.totalFinal);

  }

  constructor() {

    this.chartOptions = {
      //series: [4, 3, 1], //se comenta porque utilizo chartSeries para dar valores diferentes a cada chart
      colors: this.colors,
      chart: {
        type: 'donut',
        width: 110,
        height: 110,
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
    this.chartOptionsTotal = {
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
    this.totalSum()
  }

  ngOnInit(): void {
  }

}

