import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';

@Component({
  selector: 'app-variable-payment',
  templateUrl: './variable-payment.component.html',
  styleUrls: ['./variable-payment.component.scss'],
})
export class VariablePaymentComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';
  @ViewChild('chart',{static: false}) chart :any;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  today = new Date();
  optionsDate=['Mes actual', 'Ultimos dos meses','Ultimos 3 meses'];
  currentOption = this.optionsDate[0];

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
  //public donutChartOptions: any;
  public chartOptions!: any;
  chartSeries = [160990, 56990];

  public colors = ['#9bd3dd', '#846b99'];
  labels = ['l', 'll', 'lll'];

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
/*     this.donutChartOptions = {
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
    }; */
  }

  ngOnInit(): void {}

  changeOption(index:number){

    this.currentOption=this.optionsDate[index]; 
    let newSeries:Array<any> = [];
    switch(index){
      case 0:
        newSeries = [
          {
            name: 'Venta total',
            data: [1000, 160000, 100000],
            color: '#846b99',
          },
          {
            name: 'Meta de venta',
            data: [0, 100000, 200000, 300000, 400000],
            color: '#98D3DD',
          },
        ];
        break;
        case 1 :
        newSeries = [
          {
            name: 'Diciembre',
            data: [0, 1000, 160000, 100000, 300],
            color: '#846b99',
          },
          {
            name: 'Noviembre',
            data: [0, 100, 180000, 100, 500],
            color: '#FCC565',
          },
          {
            name: 'Meta de venta',
            data: [0, 100000, 200000, 300000, 400000],
            color: '#98D3DD',
          },
        ];  
        break;
        case 2 :
         newSeries = [
           {
             name: 'Diciembre',
             data: [0,1000, 160000, 100000,300],
             color: '#846b99',
           },
           {
             name: 'Noviembre',
             data: [0,100, 180000, 100,500],
             color: '#FCC565',
           },
           {
             name: 'Octubre',
             data: [0,500, 280000, 9900,0],
             color: '#DDDD9B',
           },
           {
             name: 'Meta de venta',
             data: [0, 100000, 200000, 300000, 400000],
             color: '#98D3DD',
           },
         ];  
         
         console.log(newSeries);
         
        break;
    }
    this.chart.updateSeries(newSeries);
  }
}
