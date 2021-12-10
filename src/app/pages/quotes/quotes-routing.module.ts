import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';
import { QuotesDetailComponent } from './components/quotes-detail/quotes-detail.component';
import { QuotesListDeatilComponent } from './components/quotes-list/quotes-list.component';
import { LayautQuotesComponent } from './layaut-quotes.component';

const routes: Routes = [
  {
    path: '',
    component: LayautQuotesComponent,
    children: [
      {
        path: '',
        component: QuotesListDeatilComponent,
      },

      {
        path: 'create',
        component: QuotesCreateComponent,
      },
      {
        path: ':id',
        component: QuotesDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesRoutingModule {}
