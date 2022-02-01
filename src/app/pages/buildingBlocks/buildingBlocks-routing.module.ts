import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectivityComponent } from './components/connectivity/connectivity.component';
import { LayautBuildingBlocksComponent } from './layaut-building-blocks.component';

const routes: Routes = [
  {
    path: '',
    component: LayautBuildingBlocksComponent,
    children: [
      {
        path: 'connectivity',
        component: ConnectivityComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingBlocksRoutingModule {}
