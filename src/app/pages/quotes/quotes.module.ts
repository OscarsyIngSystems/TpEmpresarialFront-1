import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { LayautQuotesComponent } from './layaut-quotes.component';
import { QuotesListDeatilComponent } from './components/quotes-list/quotes-list.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';
import { QuotesDetailComponent } from './components/quotes-detail/quotes-detail.component';
import { RelatedQuotesComponent } from './components/related-quotes/related-quotes.component';
import { LoadSitesComponent } from './components/load-sites/load-sites.component';
import { MatSelectModule } from '@angular/material/select';
import { HeaderActionsComponent } from 'src/app/sharedComponents/header-actions/header-actions.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LayautQuotesComponent,
    QuotesListDeatilComponent,
    QuoteFormComponent,
    QuoteFormComponent,
    QuotesCreateComponent,
    QuotesDetailComponent,
    RelatedQuotesComponent,
    LoadSitesComponent,
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    ComponentsModule,
    TranslateModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
  ],
})
export class QuotesModule {}
