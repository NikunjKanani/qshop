import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { productdescriptionPage } from './productdescription.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { productdescriptionPageRoutingModule } from './productdescription-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    productdescriptionPageRoutingModule
  ],
  declarations: [productdescriptionPage]
})
export class productdescriptionPageModule {}
