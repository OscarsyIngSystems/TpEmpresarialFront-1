import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-related-quotes',
  templateUrl: './related-quotes.component.html',
  styleUrls: ['./related-quotes.component.scss'],
})
export class RelatedQuotesComponent implements OnInit {
  public contentLabels = 'oportunities.';
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Numero de oportunidad',
      value: '07552222',
    },
    {
      name: 'Tipo',
      value: 'Nueva',
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
      columnName: 'N°',
    },
    {
      key: 'siteFolio',
      columnName: 'Folio del sitio',
    },
    {
      key: 'street',
      columnName: 'calle',
    },
    {
      key: 'colony',
      columnName: 'Colonia',
    },
    {
      key: 'delegation',
      columnName: 'Delegación/Municipio',
    },
    {
      key: 'city',
      columnName: 'Ciudad',
    },
    {
      key: 'state',
      columnName: 'Estado',
    },
    {
      key: 'cp',
      columnName: 'C.P.',
    },
  ];
  public dataSource = [
    {
      numberList: 1,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 2,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 3,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 4,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 5,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 6,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 7,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 8,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 9,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 10,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 11,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 12,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 13,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      numberList: 14,
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
