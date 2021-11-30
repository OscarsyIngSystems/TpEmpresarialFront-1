import { MatInputModule } from '@angular/material/input';
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
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OportunityFormComponent } from './oportunity-form/oportunity-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

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
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class DetailsModule {}
