import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  quoteName: string;
  quoteSheet: string;
  monthlyTotal: number;
  solutionType: string;
  loadHld: string;
  overdue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {quoteName: 'Cotizacion Audi 1', quoteSheet: 'COT7808232', monthlyTotal: 33408.00, solutionType: '', loadHld: '', overdue:''},
  {quoteName: 'Cotizacion Audi 1', quoteSheet: 'COT7808232', monthlyTotal: 33408.00, solutionType: '', loadHld: '', overdue:''},
  {quoteName: 'Cotizacion Audi 1', quoteSheet: 'COT7808232', monthlyTotal: 33408.00, solutionType: '', loadHld: '', overdue:''},
  {quoteName: 'Cotizacion Audi 1', quoteSheet: 'COT7808232', monthlyTotal: 33408.00, solutionType: '', loadHld: '', overdue:''},
];

@Component({
  selector: 'app-quotes-received',
  templateUrl: './quotes-received.component.html',
  styleUrls: ['./quotes-received.component.scss']
})
export class QuotesReceivedComponent implements OnInit {
  displayedColumns: string[] = ['quoteName', 'quoteSheet', 'monthlyTotal', 'solutionType', 'loadHld','overdue'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
