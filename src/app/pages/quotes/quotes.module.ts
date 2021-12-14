import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { LayautQuotesComponent } from './layaut-quotes.component';
import { QuotesListDeatilComponent } from './components/quotes-list/quotes-list.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderActionsComponent } from 'src/app/sharedComponents/header-actions/header-actions.component';
import { HeaderDetailComponent } from 'src/app/sharedComponents/header-detail/header-detail.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';
import { QuotesDetailComponent } from './components/quotes-detail/quotes-detail.component';
import { RelatedQuotesComponent } from './components/related-quotes/related-quotes.component';

@NgModule({
  declarations: [
    LayautQuotesComponent,
    QuotesListDeatilComponent,
    QuoteFormComponent,
    QuoteFormComponent,
    QuotesCreateComponent,
    QuotesDetailComponent,
    RelatedQuotesComponent,
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    ComponentsModule,
    TranslateModule,
  ],
})
export class QuotesModule {}
