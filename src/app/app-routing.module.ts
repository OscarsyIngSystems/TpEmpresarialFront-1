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
    path: 'buildingBlocks',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/buildingBlocks/building-blocks.module').then(
        (m) => m.BuildingBlocksModule
      ),
  },

  {
    path: 'dashboard',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path:'instalations',
    canActivateChild:[AuthGuard],
    loadChildren:() =>
    import('./pages/instalations/instalations.module').then(
      (m)=> m.InstalationsModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
