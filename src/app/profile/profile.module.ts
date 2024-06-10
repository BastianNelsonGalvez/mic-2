import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';



import { SharedModule } from '../shared/shared.module';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile..page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfilePageRoutingModule,
    SharedModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
