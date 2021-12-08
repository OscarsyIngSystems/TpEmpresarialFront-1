import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DetailsRoutingModule } from './details-routing.module';
import { AccountDetailComponent } from './account-detail.component';
import { ComponentsModule } from 'src/app/sharedComponents/components.module';
import { AccountInfoComponent } from './account-info/account-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LoadSitesComponent } from './load-sites/load-sites.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AccountDetailComponent,
    AccountInfoComponent,
    LoadSitesComponent,
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    UiSwitchModule,
    MatInputModule,
  ],
})
export class DetailsModule {}
