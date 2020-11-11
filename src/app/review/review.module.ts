import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { reviewPage } from './review.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { reviewPageRoutingModule } from './review-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    reviewPageRoutingModule
  ],
  declarations: [reviewPage]
})
export class reviewPageModule {}
