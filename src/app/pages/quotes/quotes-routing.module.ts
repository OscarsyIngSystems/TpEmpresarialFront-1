import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadSitesComponent } from './components/load-sites/load-sites.component';
import { LoadedSitesComponent } from './components/sites/loaded-sites/loaded-sites.component';
import { DeletedSitesComponent} from './components/deleted-sites/deleted-sites.component';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';
import { QuotesDetailComponent } from './components/quotes-detail/quotes-detail.component';
import { QuotesListDeatilComponent } from './components/quotes-list/quotes-list.component';
import { RelatedQuotesComponent } from './components/related-quotes/related-quotes.component';
import { LayautQuotesComponent } from './layaut-quotes.component';
import { ModelingSitesComponent } from './components/sites/modeling-sites/modeling-sites.component';

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
        path:'modeling-sites',
        component:ModelingSitesComponent
      },
      {
        path: 'loaded-sites',
        component: LoadedSitesComponent,
      },
      {
        path: 'deleted-sites',
        component: DeletedSitesComponent,
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
