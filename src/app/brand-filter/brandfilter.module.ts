import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { brandfilterPage } from './brandfilter.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { brandfilterPageRoutingModule } from './brandfilter-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    brandfilterPageRoutingModule
  ],
  declarations: [brandfilterPage]
})
export class brandfilterPageModule {}
