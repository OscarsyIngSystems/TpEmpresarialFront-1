import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-price-surveillance',
  templateUrl: './products-price-surveillance.component.html',
  styleUrls: ['./products-price-surveillance.component.scss']
})
export class ProductsPriceSurveillanceComponent implements OnInit {
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
        service: 'Videovigilancia Administrada 2 cámaras',
        price: '$970.00',
      },
    },
    {
      pack: {
        service: 'Videovigilancia Administrada 4 cámaras',
        price: '$1840.00',
      },
    },
    {
      pack: {
        service: 'Videovigilancia Administrada 8 cámaras',
        price: '$3500.00',
      },
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
