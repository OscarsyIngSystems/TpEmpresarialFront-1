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

  chartCircular: ChartComponentOptions = {
    data: [30, 22],
    title: 'Total cumplido',
    colors: ['#59cbe8', '#f7ea48'],
    labels: ['l', 'll'],
    chartType: 'doughnut',
    width: 150,
    height: 150,
    class: 'chart-container shadow',
  };

  constructor() {}

  ngOnInit(): void {}
}
