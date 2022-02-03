import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, plugins } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';

import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(BaseChartDirective) baseChart!: BaseChartDirective;
  public doughnutChartLabels: Label[] = ['', '', ''];
  public doughnutChartData: any = [
    {
      data: [350, 450, 100],
      backgroundColor: ['#3B4559', '#6F92D8', '#B1B1B1'],
    },
  ];
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

  public suma = 0;
  public contentLabels = 'accounts.accounts-dashboard.';
  constructor(private _service: AccountsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    /*     this._service.getPosts().subscribe((response) => {
      console.log(response);
      this.doughnutChartData.data = response;
      this.baseChart.chart.update();
      this.options.plugins?.push({
        id: 'total',
        afterDraw: this.renderizeChart(),
      });
    }); */
  }

  private renderizeChart() {
    let suma: number = 0;
    this.doughnutChartData.data[0].forEach((e: any) => {
      suma = suma + e;
    });
    this.suma = suma;
    this.baseChart.chart.update();
  }
}
