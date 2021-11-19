import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayautQuotesComponent } from './pages/quotes/layaut-quotes.component';

const routes: Routes = [
  
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'accounts',
    loadChildren: ()=> import('./pages/accounts/accounts.module').then(m => m.AccountsModule)
  },
{
  path: 'quotes',
  loadChildren: ()=> import('./pages/quotes/quotes.module').then(m => m.QuotesModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
