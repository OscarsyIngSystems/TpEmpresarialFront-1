import { RelatedOportunitiesComponent } from './../opportunities/related-oportunities/related-oportunities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OportunityCreateComponent } from '../opportunities/oportunity-create/oportunity-create.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { LayautAccountsComponent } from './layaut-accounts.component';
import { RelatedComponent } from './components/related/related.component';

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
        path: 'detail/:id',
        component: AccountFormComponent,
      },
      {
        path: 'create',
        component: OportunityCreateComponent,
      },
      {
        path: 'related/:id',
        component: RelatedComponent,
      },
      {
        path: 'related/:id/:section',
        component: RelatedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
