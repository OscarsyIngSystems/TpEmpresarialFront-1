import { OpportunitiesComponent } from './opportunities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OportunitiesDetailComponent } from './oportunities-list/oportunities-detail.component';
import { OportunityCreateComponent } from './oportunity-create/oportunity-create.component';

const routes: Routes = [
  {
    path: '',
    component: OpportunitiesComponent,
    children: [
      {
        path: '',
        component: OportunitiesDetailComponent,
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
export class OpportunitiesRoutingModule {}
