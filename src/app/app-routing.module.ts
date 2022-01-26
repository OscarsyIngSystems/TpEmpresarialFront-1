import { DashboardComponent } from './pages/accounts/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent,
  },
  {
    path: 'accounts',
    // canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: 'quotes',
    // canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/quotes/quotes.module').then((m) => m.QuotesModule),
  },
  {
    path: 'opportunities',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/opportunities/opportunities.module').then(
        (m) => m.OpportunitiesModule
      ),
  },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
