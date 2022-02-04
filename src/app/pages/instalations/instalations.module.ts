import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstalationsRoutingModule } from './instalations-routing.module';
import { InstalationComponent } from './instalations.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from 'src/app/shared/components.module';

@NgModule({
  declarations: [InstalationComponent],
  imports: [CommonModule, InstalationsRoutingModule, MatTabsModule,MatIconModule,ComponentsModule],
})
export class InstalationsModule {}
