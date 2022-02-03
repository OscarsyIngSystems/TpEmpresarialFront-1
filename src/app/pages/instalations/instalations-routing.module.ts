import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstalationComponent} from './instalations.component';

const routes: Routes = [
  {
    path:':id',
    component:InstalationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalationsRoutingModule { }
