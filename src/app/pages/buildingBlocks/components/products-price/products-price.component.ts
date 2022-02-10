import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-price',
  templateUrl: './products-price.component.html',
  styleUrls: ['./products-price.component.scss']
})
export class ProductsPriceComponent implements OnInit {
  columns = [
    {
      key: 'servicesPrice',
      columnName: 'Productos / Precio',
    },
    {
      key: 'megas',
      columnName: '',
    },
    {
      key: 'amount',
      columnName: 'Cantidad',
    },
  ];
  dataSource = [
    {
      pack: {
        service: '50 Llamadas Nacionales',
        price: '$29.71',
      },
    },
    {
      pack: {
        service: '75 Llamadas Nacionales',
        price: '$41.42',
      },
    },
    {
      pack: {
        service: '200 Llamadas Nacionales',
        price: '$148.97',
      },
    },
    {
      pack: {
        service: '250 Llamadas Nacionales',
        price: '$183.29',
      },
    },
    {
      pack: {
        service: '500 Llamadas Nacionales',
        price: '$223.75',
      },
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
