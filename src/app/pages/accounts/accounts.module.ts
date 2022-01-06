import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LayautAccountsComponent } from './layaut-accounts.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { ComponentsModule } from 'src/app/shared/components.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OportunitiesComponent } from '../../shared/dashboad-components/oportunities/oportunities.component';
import { DialogOportunitiesComponent } from './components/dialog-oportunities/dialog-oportunities.component';
import { DialogQuotesComponent } from './components/dialog-quotes/dialog-quotes.component';
import { DialogMassiveLoadSitesComponent } from './components/dialog-massive-load-sites/dialog-massive-load-sites.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatInputModule } from '@angular/material/input';
import { DataTablesModule } from 'angular-datatables';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { AccountsListBottomTabsComponent } from './components/accounts-list-bottom-tabs/accounts-list-bottom-tabs.component';
import { RelatedComponent } from './components/related/related.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DialogTaskComponent } from './components/dialog-task/dialog-task.component';
import { DialogEventComponent } from './components/dialog-event/dialog-event.component';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    LayautAccountsComponent,
    AccountsListComponent,
    DashboardComponent,
    OportunitiesComponent,
    DialogOportunitiesComponent,
    DialogQuotesComponent,
    DialogMassiveLoadSitesComponent,
    AccountFormComponent,
    AccountsListBottomTabsComponent,
    RelatedComponent,
    DialogTaskComponent,
    DialogEventComponent,
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
    MatInputModule,
    DataTablesModule,
    UiSwitchModule,
    NgApexchartsModule,
  ],
})
export class AccountsModule {}
