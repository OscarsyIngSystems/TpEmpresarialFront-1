import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LayautAccountsComponent } from './layaut-accounts.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';


@NgModule({
  declarations: [
    LayautAccountsComponent,
    AccountsListComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ComponentsModule
  ]
})
export class AccountsModule { }
