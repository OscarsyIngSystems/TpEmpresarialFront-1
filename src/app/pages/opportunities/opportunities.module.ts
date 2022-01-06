import { OportunityCreateComponent } from 'src/app/pages/opportunities/oportunity-create/oportunity-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesComponent } from './opportunities.component';
import { OportunitiesListComponent } from './oportunities-list/oportunities-list.component';
import { ComponentsModule } from 'src/app/shared/components.module';
import { OportunityFormComponent } from './oportunity-form/oportunity-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { OportunitiesDetailComponent } from './oportunities-detail/oportunities-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RelatedOportunitiesComponent } from './related-oportunities/related-oportunities.component';
import { TeamComponent } from './dialogs/team/team.component';
@NgModule({
  declarations: [
    OpportunitiesComponent,
    OportunitiesListComponent,
    OportunityCreateComponent,
    OportunityFormComponent,
    OportunitiesDetailComponent,
    RelatedOportunitiesComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    ComponentsModule,
    TranslateModule,
    MatDatepickerModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class OpportunitiesModule {}
