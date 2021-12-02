import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderDetailComponent } from './header-detail/header-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HeaderActionsComponent } from './header-actions/header-actions.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    HeaderDetailComponent,
    HeaderActionsComponent,
    EmptyComponent,
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    HeaderDetailComponent,
    HeaderActionsComponent,
    EmptyComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    TranslateModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
  ],
})
export class ComponentsModule {}
