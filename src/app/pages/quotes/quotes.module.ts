import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { LayautQuotesComponent } from './layaut-quotes.component';
import { QuotesListDeatilComponent } from './components/quotes-list/quotes-list.component';
import { ComponentsModule } from 'src/app/shared/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';
import { QuotesDetailComponent } from './components/quotes-detail/quotes-detail.component';
import { RelatedQuotesComponent } from './components/related-quotes/related-quotes.component';
import { LoadSitesComponent } from './components/load-sites/load-sites.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LoadedSitesComponent } from './components/sites/loaded-sites/loaded-sites.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogLoadSitesComponent } from './components/dialogs/dialog-load-sites/dialog-load-sites.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeletedSitesComponent } from './components/deleted-sites/deleted-sites.component';
import { DialogEditLoadSitesComponent } from './components/dialogs/dialog-edit-load-sites/dialog-edit-load-sites.component';
import { DialogDeletedSitesComponent } from './components/dialogs/dialog-deleted-sites/dialog-deleted-sites.component';
import { MatInputModule } from '@angular/material/input';
import { DialogSendSitesComponent } from './components/dialogs/dialog-send-sites/dialog-send-sites.component';
import { QuotesReceivedComponent } from './components/quotes-received/quotes-received.component';
import { ModelingSitesComponent } from './components/sites/modeling-sites/modeling-sites.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AgmCoreModule } from '@agm/core';
import { CustomMapComponent } from './components/sites/custom-map/custom-map.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { environment } from 'src/environments/environment';
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
    DialogLoadSitesComponent,
    DialogEditLoadSitesComponent,
    DeletedSitesComponent,
    DialogDeletedSitesComponent,
    DialogSendSitesComponent,
    QuotesReceivedComponent,
    ModelingSitesComponent,
    CustomMapComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.google.apiKey,
    }),
    CommonModule,
    QuotesRoutingModule,
    ComponentsModule,
    TranslateModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    GooglePlaceModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class QuotesModule {}
