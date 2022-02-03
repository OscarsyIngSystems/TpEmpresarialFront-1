import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instalations',
  templateUrl: './instalations.component.html',
  styleUrls: ['./instalations.component.scss'],
})
export class InstalationComponent implements OnInit {
  public contentLabels = 'instalations.';
  dataContacts = {
    columnsShow: [
      {
        key: 'accountName',
        columnName: this.contentLabels + 'to-install-table.colum1',
      },
      {
        key: 'opportunity',
        columnName: this.contentLabels + 'to-install-table.colum2',
      },
      {
        key: 'quote',
        columnName: this.contentLabels + 'to-install-table.colum3',
      },
      {
        key: 'invoice',
        columnName: this.contentLabels + 'to-install-table.colum4',
      },
      {
        key: 'service',
        columnName: this.contentLabels + 'to-install-table.colum5',
      },
      {
        key: 'accountBill',
        columnName: this.contentLabels + 'to-install-table.colum6',
      },
      {
        key: 'installationAddress',
        columnName: this.contentLabels + 'to-install-table.colum7',
      },
      {
        key: 'orderType',
        columnName: this.contentLabels + 'to-install-table.colum8',
      },
      {
        key: 'status',
        columnName: this.contentLabels + 'to-install-table.colum9',
      },
      {
        key: 'serviceOrder',
        columnName: this.contentLabels + 'to-install-table.colum10',
      },
      {
        key: 'statusOs',
        columnName: this.contentLabels + 'to-install-table.colum11',
      },
    ],
    dataSource: [
      {
        accountName: 'AUDI CDMX',
        opportunity: '04554545',
        quote: 'COT1151515',
        invoice: 'CSP411512',
        service: 'Internet dedicado 150',
        accountBill: '0215455547',
        installationAddress: 'Av. Paseo de la reforma',
        orderType: 'Empresarial',
        status: '',
        serviceOrder: '',
        statusOs: '',
      },
      {
        accountName: 'AUDI CDMX',
        opportunity: '04554545',
        quote: 'COT1151515',
        invoice: 'CSP411512',
        service: 'Internet dedicado 150',
        accountBill: '0215455547',
        installationAddress: 'Av. Paseo de la reforma',
        orderType: 'Empresarial',
        status: '',
        serviceOrder: '',
        statusOs: '',
      },
      {
        accountName: 'AUDI CDMX',
        opportunity: '04554545',
        quote: 'COT1151515',
        invoice: 'CSP411512',
        service: 'Internet dedicado 150',
        accountBill: '0215455547',
        installationAddress: 'Av. Paseo de la reforma',
        orderType: 'Empresarial',
        status: '',
        serviceOrder: '',
        statusOs: '',
      },
      {
        accountName: 'AUDI CDMX',
        opportunity: '04554545',
        quote: 'COT1151515',
        invoice: 'CSP411512',
        service: 'Internet dedicado 150',
        accountBill: '0215455547',
        installationAddress: 'Av. Paseo de la reforma',
        orderType: 'Empresarial',
        status: '',
        serviceOrder: '',
        statusOs: '',
      },
    ],
  };

  constructor() {}
  ngOnInit(): void {}
}
