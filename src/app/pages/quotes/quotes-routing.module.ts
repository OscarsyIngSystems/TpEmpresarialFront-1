import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesRoutingModule {}
