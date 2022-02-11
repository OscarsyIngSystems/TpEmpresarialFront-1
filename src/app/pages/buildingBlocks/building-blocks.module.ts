import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayautBuildingBlocksComponent } from './layaut-building-blocks.component';
import { BuildingBlocksRoutingModule } from './buildingBlocks-routing.module';
import { ConnectivityComponent } from './components/connectivity/connectivity.component';
import { ComponentsModule } from 'src/app/shared/components.module';
import { HeaderActionsBuildingBlocksComponent } from './components/header-actions-building-blocks/header-actions-building-blocks.component';
import { StepperBuildingBlocksComponent } from './components/stepper-building-blocks/stepper-building-blocks.component';
import { FamilyButtonsComponent } from './components/family-buttons/family-buttons.component';
import { ProductsPriceComponent } from './components/products-price/products-price.component';
import { NationalsComponent } from './components/nationals/nationals.component';
import { VideoSurveillanceComponent } from './components/video-surveillance/video-surveillance.component';
import { ProductsPriceSurveillanceComponent } from './components/products-price-surveillance/products-price-surveillance.component';

@NgModule({
  declarations: [
    LayautBuildingBlocksComponent,
    ConnectivityComponent,
    HeaderActionsBuildingBlocksComponent,
    StepperBuildingBlocksComponent,
    FamilyButtonsComponent,
    ProductsPriceComponent,
    NationalsComponent,
    VideoSurveillanceComponent,
    ProductsPriceSurveillanceComponent,
  ],
  imports: [CommonModule, BuildingBlocksRoutingModule, ComponentsModule],
})
export class BuildingBlocksModule {}
