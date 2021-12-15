import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-related-oportunities',
  templateUrl: './related-oportunities.component.html',
  styleUrls: ['./related-oportunities.component.scss'],
})
export class RelatedOportunitiesComponent implements OnInit {
  public contentLabels = 'oportunities.';
  currentTab = 0;

  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'Número de la oportunidad',
      value: '9898987',
    },
    {
      name: 'Etapa',
      value: 'Necesidades',
    },
    {
      name: 'Importe',
      value: 'Estratégicas',
    },
    {
      name: 'Fecha de cierre',
      value: '21/12/2021',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio aparicio contreras',
    },
  ];

  columnsShow = [
    {
      key: 'numberList',
      columnName: this.contentLabels + 'table-related.colum1',
    },
    {
      key: 'quoteName',
      columnName: this.contentLabels + 'table-related.colum2',
    },
    {
      key: 'invoice',
      columnName: this.contentLabels + 'table-related.colum3',
    },
    {
      key: 'mounthTotal',
      columnName: this.contentLabels + 'table-related.colum4',
    },
    {
      key: 'status',
      columnName: this.contentLabels + 'table-related.colum5',
    },
    {
      key: 'validity',
      columnName: this.contentLabels + 'table-related.colum6',
    },
    {
      key: 'mainCot',
      columnName: this.contentLabels + 'table-related.colum6',
    },
  ];
  public dataSource = [
    {
      numberList: 1,
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2021',
      mainCot: true,
    },
    {
      numberList: 1,
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2021',
      mainCot: false,
    },
    {
      numberList: 1,
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2021',
      mainCot: false,
    },
    {
      numberList: 1,
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2021',
      mainCot: false,
    },
    {
      numberList: 1,
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2021',
      mainCot: false,
    },
    {
      numberList: 1,
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2021',
      mainCot: false,
    },
    {
      numberList: 1,
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2021',
      mainCot: false,
    },
  ];

  dataContacts = {
    columnsShow: [
      {
        key: 'numberList',
        columnName: this.contentLabels + 'table-contacts.colum1',
      },
      {
        key: 'quoteName',
        columnName: this.contentLabels + 'table-contacts.colum2',
      },
      {
        key: 'invoice',
        columnName: this.contentLabels + 'table-contacts.colum3',
      },
      {
        key: 'mounthTotal',
        columnName: this.contentLabels + 'table-contacts.colum4',
      },
      {
        key: 'status',
        columnName: this.contentLabels + 'table-contacts.colum5',
      },
      {
        key: 'validity',
        columnName: this.contentLabels + 'table-contacts.colum6',
      },
    ],
    dataSource: [
      {
        name: 'Manuel ventas LATAM',
        position: 'Cargo',
        email: 'manuel@ventas.mx',
        phone: '55265555',
        contactType: 'Finanzas',
        isMain: false,
      },
      {
        name: 'Manuel ventas LATAM',
        position: 'Cargo',
        email: 'manuel@ventas.mx',
        phone: '55265555',
        contactType: 'Finanzas',
        isMain: true,
      },
      {
        name: 'Manuel ventas LATAM',
        position: 'Cargo',
        email: 'manuel@ventas.mx',
        phone: '55265555',
        contactType: 'Finanzas',
        isMain: false,
      },
      {
        name: 'Manuel ventas LATAM',
        position: 'Cargo',
        email: 'manuel@ventas.mx',
        phone: '55265555',
        contactType: 'Finanzas',
        isMain: false,
      },
    ],
  };

  cardNames = [
    'Contactos',
    'Archivos',
    'Historial de actividades',
    'Historial de etapa',
  ];
  constructor() {}

  changeTab(activeTab: number) {
    this.currentTab = activeTab;
  }

  ngOnInit(): void {}
}