import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LayautAccountsComponent } from './layaut-accounts.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    LayautAccountsComponent,
    AccountsListComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ComponentsModule,
    MatSidenavModule,
    MatCardModule,
    ChartsModule,
    TranslateModule,
  ],
})
export class AccountsModule {}
