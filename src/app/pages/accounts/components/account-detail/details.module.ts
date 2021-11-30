import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { OportunitiesDetailComponent } from './oportunities-list/oportunities-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { AccountDetailComponent } from './account-detail.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { MatButtonModule } from '@angular/material/button';
import { AccountInfoComponent } from './account-info/account-info.component';
import { OportunityCreateComponent } from './oportunity-create/oportunity-create.component';

@NgModule({
  declarations: [OportunitiesDetailComponent, AccountDetailComponent, AccountInfoComponent, OportunityCreateComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatIconModule,
    ComponentsModule,
    MatButtonModule,
  ],
})
export class DetailsModule {}
