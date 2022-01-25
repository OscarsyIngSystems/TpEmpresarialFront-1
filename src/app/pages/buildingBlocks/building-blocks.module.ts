import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayautBuildingBlocksComponent } from './layaut-building-blocks.component';
import { BuildingBlocksRoutingModule } from './buildingBlocks-routing.module';

@NgModule({
  declarations: [LayautBuildingBlocksComponent],
  imports: [CommonModule, BuildingBlocksRoutingModule],
})
export class BuildingBlocksModule {}
