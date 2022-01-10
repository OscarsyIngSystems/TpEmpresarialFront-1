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
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { TableGeneralComponent } from './table-general/table-general.component';
import { DataTablesModule } from 'angular-datatables';
import { QuoteComponent } from './dashboad-components/quote/quote.component';
import { CellIndicatorsComponent } from './dashboad-components/cell-indicators/cell-indicators.component';
import { ChartComponent } from './dashboad-components/chart/chart.component';
import { SegmentAccountComponent } from './dashboad-components/segment-account/segment-account.component';
import { VariablePaymentComponent } from './dashboad-components/variable-payment/variable-payment.component';
import { ChartsModule } from 'ng2-charts';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsRelatedComponent } from './tabs-related/tabs-related.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UploadButtonFileComponent } from './upload-button-file/upload-button-file.component';
import { InstallationsComponent } from './dashboad-components/installations/installations.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ContactsSearchComponent } from './contacts-search/contacts-search.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    HeaderDetailComponent,
    HeaderActionsComponent,
    EmptyComponent,
    NavigationMenuComponent,
    TableGeneralComponent,
    QuoteComponent,
    CellIndicatorsComponent,
    ChartComponent,
    SegmentAccountComponent,
    VariablePaymentComponent,
    TabsRelatedComponent,
    UploadFileComponent,
    UploadButtonFileComponent,
    InstallationsComponent,
    ContactsSearchComponent,
  ],
  exports: [
    ChartsModule,
    NavbarComponent,
    TableComponent,
    HeaderDetailComponent,
    HeaderActionsComponent,
    EmptyComponent,
    NavigationMenuComponent,
    TableGeneralComponent,
    QuoteComponent,
    CellIndicatorsComponent,
    ChartComponent,
    SegmentAccountComponent,
    DataTablesModule,
    ReactiveFormsModule,
    VariablePaymentComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatTabsModule,
    TabsRelatedComponent,
    UploadFileComponent,
    NgApexchartsModule,
    UploadButtonFileComponent,
    InstallationsComponent,
    NgxMaterialTimepickerModule,
    ContactsSearchComponent,
  ],
  imports: [
    ChartsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    DataTablesModule,
    MatDatepickerModule,
    NgxFileDropModule,
    NgApexchartsModule,
    NgxMaterialTimepickerModule,
  ],
})
export class ComponentsModule {}
