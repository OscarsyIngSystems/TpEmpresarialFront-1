import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { LayautQuotesComponent } from './layaut-quotes.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LayautQuotesComponent, QuotesListComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    ComponentsModule,
    MatSidenavModule,
    TranslateModule,
  ],
})
export class QuotesModule {}
