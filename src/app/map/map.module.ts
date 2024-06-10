import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';



import { SharedModule } from '../shared/shared.module';
import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MapPageRoutingModule,
    SharedModule
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
