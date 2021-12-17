import { OpportunitiesComponent } from './opportunities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OportunitiesListComponent } from './oportunities-list/oportunities-list.component';
import { OportunityCreateComponent } from './oportunity-create/oportunity-create.component';
import { OportunitiesDetailComponent } from './oportunities-detail/oportunities-detail.component';
import { RelatedOportunitiesComponent } from './related-oportunities/related-oportunities.component';

const routes: Routes = [
  {
    path: '',
    component: OpportunitiesComponent,
    children: [
      {
        path: '',
        component: OportunitiesListComponent,
      },
      {
        path: ':id',
        component: OportunitiesDetailComponent,
      },
      {
        path: 'new/op/:id',
        component: OportunityCreateComponent,
      },
      {
        path: ':id/related',
        component: RelatedOportunitiesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpportunitiesRoutingModule {}
