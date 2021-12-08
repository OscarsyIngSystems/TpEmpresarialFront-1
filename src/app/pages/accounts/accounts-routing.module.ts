import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OportunityCreateComponent } from '../opportunities/oportunity-create/oportunity-create.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { LayautAccountsComponent } from './layaut-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: LayautAccountsComponent,
    children: [
      {
        path: '',
        component: AccountsListComponent,
      },
      {
        path: 'detail',
        loadChildren: () =>
          import('./components/account-detail/details.module').then(
            (m) => m.DetailsModule
          ),
      },
      {
        path: 'create',
        component: OportunityCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
