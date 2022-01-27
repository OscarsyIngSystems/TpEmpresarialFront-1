import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  quoteName: string;
  quoteSheet: string;
  oportunity: string;
  monthlyTotal: number;
  validity: string;
  loadHld: string;
  overdue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {quoteName: 'Cotizacion Audi 1', quoteSheet: 'COT7808232',oportunity: 'AUDI CDMX OP', monthlyTotal: 33408.00, validity: '12-Nov-2021', loadHld: '', overdue:''},
  {quoteName: 'Zapata_2-COT', quoteSheet: 'COT3781622',oportunity: 'Zapata  2', monthlyTotal: 23542.00, validity: '02-Dic-2021', loadHld: '', overdue:''},
  {quoteName: 'Automotriz Nissan_1-COT', quoteSheet: 'COT3781633',oportunity: 'Automotriz Nissan 1', monthlyTotal: 56408.00, validity: '12-Nov-2021', loadHld: '', overdue:''},
  {quoteName: 'Toyota_2-COT', quoteSheet: 'COT3781644',oportunity: 'VW Lomas OP', monthlyTotal: 46764.00, validity: '24-Mar-2021', loadHld: '', overdue:''},
  {quoteName: 'VW Lomas_4-COT', quoteSheet: 'COT3781655',oportunity: 'Toyota OP-2', monthlyTotal: 47124.00, validity: '12-Ene-2021', loadHld: '', overdue:''},
  {quoteName: 'Aeroméxico_1-COT', quoteSheet: 'COT3781644',oportunity: 'Aeroméxico_1-COT', monthlyTotal: 46764.00, validity: '13-Feb-2021', loadHld: '', overdue:''},
];

@Component({
  selector: 'app-quotes-received',
  templateUrl: './quotes-received.component.html',
  styleUrls: ['./quotes-received.component.scss']
})
export class QuotesReceivedComponent implements OnInit {
  displayedColumns: string[] = ['quoteName', 'quoteSheet','oportunity', 'monthlyTotal', 'validity', 'loadHld','overdue'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
