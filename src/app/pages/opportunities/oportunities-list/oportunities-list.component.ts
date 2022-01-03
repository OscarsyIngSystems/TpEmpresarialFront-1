import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-oportunities-list',
  templateUrl: './oportunities-list.component.html',
  styleUrls: ['./oportunities-list.component.scss'],
})
export class OportunitiesListComponent implements OnInit {
  public contentLabels = 'oportunities.';
  filterParam: FormControl = new FormControl('1');
  lastValue!: number;

  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID',
      value: '9898987',
    },
    {
      name: 'Folio Cuenta',
      value: 'CRM-00022445',
    },
    {
      name: 'RFC',
      value: 'HSP030709EA2',
    },
    {
      name: 'Segmento',
      value: 'I',
    },
  ];

  columnsShow = [
    {
      key: 'numberList',
      columnName: this.contentLabels + 'table.colum1',
    },
    {
      key: 'oportunityName',
      columnName: this.contentLabels + 'table.colum2',
    },
    {
      key: 'oportunityNumber',
      columnName: this.contentLabels + 'table.colum3',
    },
    {
      key: 'accountName',
      columnName: this.contentLabels + 'table.colum6',
    },
    {
      key: 'stage',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'amount',
      columnName: this.contentLabels + 'table.colum5',
    },
  ];
  public dataSource = [
    {
      numberList: 1,
      oportunityName: 'Audi CDMX OP',
      oportunityNumber: '3754545',
      accountName: 'Audi CDMX',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
    {
      numberList: 2,
      oportunityName: 'Zapata OP2',
      oportunityNumber: '3754545',
      accountName: 'Grupo Zapata',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
    {
      numberList: 3,
      oportunityName: 'Automotriz Nissan OP1',
      oportunityNumber: '3754545',
      accountName: 'Imperio Automotriz del Sur',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
    {
      numberList: 4,
      oportunityName: 'VW Lomas OP',
      oportunityNumber: '3754545',
      accountName: 'VW Lomas',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
    {
      numberList: 5,
      oportunityName: 'Toyota OP',
      oportunityNumber: '3754545',
      accountName: 'Toyota Universidad',
      stage: 'Necesidades',
      amount: '$45454.22',
    },
  ];
  constructor() {
    this.lastValue = this.filterParam.value;
  }

  doFilter(event: any) {
    if (this.lastValue !== event.target.value) {
      this.lastValue = event.target.value;
    }

    else {
      this.filterParam.setValue(0);
      this.lastValue = 0;
    }
  }

  ngOnInit(): void { }
}
