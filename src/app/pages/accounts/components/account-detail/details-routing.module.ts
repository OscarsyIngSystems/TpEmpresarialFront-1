import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { OportunitiesDetailComponent } from './oportunities-list/oportunities-detail.component';
import { OportunityCreateComponent } from './oportunity-create/oportunity-create.component';

const routes: Routes = [
  {
    path: '',
    component: AccountDetailComponent,
    children: [
      {
        path: '',
        component: AccountInfoComponent,
      },
      {
        path: 'oportunities',
        component: OportunitiesDetailComponent,
      },
      {
        path: 'create-oportunity',
        component: OportunityCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
