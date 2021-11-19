import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LayautAccountsComponent } from './layaut-accounts.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    LayautAccountsComponent,
    AccountsListComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ComponentsModule,
    MatSidenavModule,
  ]
})
export class AccountsModule { }
