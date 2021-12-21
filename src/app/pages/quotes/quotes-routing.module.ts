import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadSitesComponent } from './components/load-sites/load-sites.component';
import { LoadedSitesComponent } from './components/loaded-sites/loaded-sites.component';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';
import { QuotesDetailComponent } from './components/quotes-detail/quotes-detail.component';
import { QuotesListDeatilComponent } from './components/quotes-list/quotes-list.component';
import { RelatedQuotesComponent } from './components/related-quotes/related-quotes.component';
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
        path: 'sites',
        component: LoadSitesComponent,
      },
      {
        path: 'loaded-sites',
        component: LoadedSitesComponent,
      },
      {
        path: 'create/:id',
        component: QuotesCreateComponent,
      },
      {
        path: 'related',
        component: RelatedQuotesComponent,
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
