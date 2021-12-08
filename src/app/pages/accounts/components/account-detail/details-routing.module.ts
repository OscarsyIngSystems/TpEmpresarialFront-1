import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail.component';
import { AccountInfoComponent } from './account-info/account-info.component';

const routes: Routes = [
  {
    path: '',
    component: AccountDetailComponent,
    children: [
      {
        path: '',
        component: AccountInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
