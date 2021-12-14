import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-accounts-list-bottom-tabs',
  templateUrl: './accounts-list-bottom-tabs.component.html',
  styleUrls: ['./accounts-list-bottom-tabs.component.scss'],
})
export class AccountsListBottomTabsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'range',
    'email',
    'phone',
    'type',
    'principal',
  ];
  dataSource = [
    {
      name: 'Hydrogen',
      range: 'Lorem Ipsum',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Proveedores',
    },
    {
      name: 'Hydrogen',
      range: 'Lorem Ipsum',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Proveedores',
    },
    {
      name: 'Hydrogen',
      range: 'Lorem Ipsum',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Proveedores',
    },
    {
      name: 'Hydrogen',
      range: 'Lorem Ipsum',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Proveedores',
    },
    {
      name: 'Hydrogen',
      range: 'Lorem Ipsum',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Proveedores',
    },
    {
      name: 'Hydrogen',
      range: 'Lorem Ipsum',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Proveedores',
    },
    {
      name: 'Hydrogen',
      range: 'Lorem Ipsum',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Proveedores',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
