import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { LayautQuotesComponent } from './layaut-quotes.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LayautQuotesComponent, QuotesListComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    ComponentsModule,
    MatSidenavModule,
    TranslateModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
  ],
})
export class QuotesModule {}
