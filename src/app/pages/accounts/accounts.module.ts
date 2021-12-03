import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LayautAccountsComponent } from './layaut-accounts.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ChartComponent } from './components/chart/chart.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SegmentAccountComponent } from './components/segment-account/segment-account.component';
import { VariablePaymentComponent } from './components/variable-payment/variable-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OportunitiesComponent } from './components/oportunities/oportunities.component';
import { CellIndicatorsComponent } from './components/cell-indicators/cell-indicators.component';
import { DialogOportunitiesComponent } from './components/dialog-oportunities/dialog-oportunities.component';
import { DialogQuotesComponent } from './components/dialog-quotes/dialog-quotes.component';
import { DialogMassiveLoadSitesComponent } from './components/dialog-massive-load-sites/dialog-massive-load-sites.component';
import { NgxFileDropModule } from 'ngx-file-drop';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    LayautAccountsComponent,
    AccountsListComponent,
    DashboardComponent,
    ChartComponent,
    QuoteComponent,
    SegmentAccountComponent,
    VariablePaymentComponent,
    OportunitiesComponent,
    CellIndicatorsComponent,
    DialogOportunitiesComponent,
    DialogQuotesComponent,
    DialogMassiveLoadSitesComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ComponentsModule,
    ChartsModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    NgxFileDropModule,
  ],
})
export class AccountsModule {}
