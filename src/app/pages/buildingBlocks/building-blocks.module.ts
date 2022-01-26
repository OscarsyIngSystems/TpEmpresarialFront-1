import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayautBuildingBlocksComponent } from './layaut-building-blocks.component';
import { BuildingBlocksRoutingModule } from './buildingBlocks-routing.module';
import { ConnectivityComponent } from './components/connectivity/connectivity.component';
import { ComponentsModule } from 'src/app/shared/components.module';
import { HeaderActionsBuildingBlocksComponent } from './components/header-actions-building-blocks/header-actions-building-blocks.component';

@NgModule({
  declarations: [LayautBuildingBlocksComponent, ConnectivityComponent, HeaderActionsBuildingBlocksComponent],
  imports: [CommonModule, BuildingBlocksRoutingModule, ComponentsModule],
})
export class BuildingBlocksModule {}
