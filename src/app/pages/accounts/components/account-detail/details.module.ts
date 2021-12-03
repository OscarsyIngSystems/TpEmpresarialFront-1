import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DetailsRoutingModule } from './details-routing.module';
import { OportunitiesDetailComponent } from './oportunities-list/oportunities-detail.component';
import { AccountDetailComponent } from './account-detail.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { AccountInfoComponent } from './account-info/account-info.component';
import { OportunityCreateComponent } from './oportunity-create/oportunity-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OportunityFormComponent } from './oportunity-form/oportunity-form.component';
import { QuotesListDeatilComponent } from './quotes-list/quotes-list.component';
import { QuotesCreateComponent } from './quotes-create/quotes-create.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    OportunitiesDetailComponent,
    AccountDetailComponent,
    AccountInfoComponent,
    OportunityCreateComponent,
    OportunityFormComponent,
    QuotesListDeatilComponent,
    QuotesCreateComponent,
    QuoteFormComponent,
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    UiSwitchModule,
  ],
})
export class DetailsModule {}
