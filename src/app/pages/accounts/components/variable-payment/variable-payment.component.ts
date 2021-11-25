import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-variable-payment',
  templateUrl: './variable-payment.component.html',
  styleUrls: ['./variable-payment.component.scss']
})
export class VariablePaymentComponent implements OnInit {

  public contentLabels = 'accounts.accounts-dashboard.';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
