import { DashboardComponent } from './pages/accounts/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoadSitesComponent } from './pages/accounts/components/account-detail/load-sites/load-sites.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./pages/accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: 'quotes',
    loadChildren: () =>
      import('./pages/quotes/quotes.module').then((m) => m.QuotesModule),
  },
  {
    path: 'opportunities',
    loadChildren: () =>
      import('./pages/opportunities/opportunities.module').then(
        (m) => m.OpportunitiesModule
      ),
  },
  {
    path: 'sites-upload',
    component: LoadSitesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
