import { Component, OnInit } from '@angular/core';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';

  chartProps: ChartComponentOptions = {
    data: [3, 4, 7],
    title: 'Cuentas',
    colors: ['#3B4559', '#6F92D8', '#B1B1B1'],
    labels: ['Casa de productos', 'Building Blocks', 'Mixta'],
    chartType: 'doughnut',
    width: 150,
    height: 150,
    class: 'chart-container shadow'
  };

  constructor() {}

  ngOnInit(): void {}
}
