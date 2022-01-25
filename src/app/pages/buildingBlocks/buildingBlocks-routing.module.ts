import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayautBuildingBlocksComponent } from './layaut-building-blocks.component';

const routes: Routes = [
  {
    path: '',
    component: LayautBuildingBlocksComponent,
    children: [
      {
        path: 'buldingBlocks',
        component: LayautBuildingBlocksComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingBlocksRoutingModule {}
