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
import { OportunityFormComponent } from './oportunity-form/oportunity-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OportunitiesDetailComponent,
    AccountDetailComponent,
    AccountInfoComponent,
    OportunityCreateComponent,
    OportunityFormComponent,
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatIconModule,
    ComponentsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DetailsModule {}
