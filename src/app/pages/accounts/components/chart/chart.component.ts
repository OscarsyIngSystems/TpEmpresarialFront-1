import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit, AfterContentInit {
  @Input() graphOptions!: ChartComponentOptions;
  @ViewChild(BaseChartDirective) baseChart!: BaseChartDirective;

  public suma = 0;
  public doughnutChartLabels: Label[] = ['', '', ''];
  public doughnutChartData: any;

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
    if (this.graphOptions.chartType === 'line') {
      this.doughnutChartData = [
        {
          data: this.graphOptions.data,
          backgroundColor: 'transparent',
          borderColor: '#59CBE8',
          pointBackgroundColor: '#FFF',
          pointBorderColor: '#59CBE8',
          pointRadius: 5,
        },
      ];
    } else {
      this.doughnutChartData = [
        {
          data: this.graphOptions.data,
          backgroundColor: this.graphOptions.colors,
        },
      ];
    }
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

  private renderizeChart(): void {
    let suma = 0;
    this.doughnutChartData[0].data.forEach((e: any) => {
      suma = suma + e;
    });
    this.suma = suma;
    this.baseChart.chart.update();
  }
}
