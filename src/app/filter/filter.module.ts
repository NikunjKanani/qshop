import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filterPage } from './filter.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { filterPageRoutingModule } from './filter-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    filterPageRoutingModule
  ],
  declarations: [filterPage]
})
export class filterPageModule {}
