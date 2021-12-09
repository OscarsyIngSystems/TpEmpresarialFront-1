import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}
}
