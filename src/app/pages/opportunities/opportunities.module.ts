import { OportunityCreateComponent } from 'src/app/pages/opportunities/oportunity-create/oportunity-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesComponent } from './opportunities.component';
import { OportunitiesDetailComponent } from './oportunities-list/oportunities-detail.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { OportunityFormComponent } from './oportunity-form/oportunity-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OpportunitiesComponent,
    OportunitiesDetailComponent,
    OportunityCreateComponent,
    OportunityFormComponent,
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    ComponentsModule,
    TranslateModule,
  ],
})
export class OpportunitiesModule {}
