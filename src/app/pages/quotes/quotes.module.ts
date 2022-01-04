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
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LoadedSitesComponent } from './components/loaded-sites/loaded-sites.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
    LoadedSitesComponent,
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    ComponentsModule,
    TranslateModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule
  ],
})
export class QuotesModule {}
