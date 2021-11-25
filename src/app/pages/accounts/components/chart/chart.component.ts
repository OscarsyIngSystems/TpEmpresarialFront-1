import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() graphOptions!: ChartComponentOptions;
  @ViewChild(BaseChartDirective) baseChart!: BaseChartDirective;

  public suma = 0;
  public doughnutChartLabels: Label[] = ['', '', ''];
  public doughnutChartData: any; /* = [
    {
      data: [1,2,3],
      backgroundColor: ['#3B4559', '#6F92D8', '#B1B1B1'],
    },
  ]; */

  public doughnutChartType: ChartType = 'doughnut';

  public options: ChartOptions = {
    cutoutPercentage: 85,
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: [],
  };

  constructor(private _service: AccountsService) {}

  ngAfterContentInit(): void {
    this.doughnutChartData = [
      {
        data: this.graphOptions.data,
        backgroundColor: ['#3B4559', '#6F92D8', '#B1B1B1'],
      },
    ];
  }

  ngAfterViewInit(): void {
    this._service.getPosts().subscribe((response) => {
      this.baseChart.chart.update();
      this.options.plugins?.push({
        id: 'total',
        afterDraw: this.renderizeChart(),
      });
    });
  }

  private renderizeChart() {
    console.log(this.doughnutChartData);

    let suma: number = 0;
    this.doughnutChartData[0].data.forEach((e: any) => {
      suma = suma + e;
    });
    this.suma = suma;
    this.baseChart.chart.update();
  }
}
