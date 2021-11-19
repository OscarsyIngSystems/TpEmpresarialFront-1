import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { LayautQuotesComponent } from './layaut-quotes.component';

const routes: Routes = [

  {
    path: '',
    component:LayautQuotesComponent,
    children: [
      {
        path: '',
        component:QuotesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
