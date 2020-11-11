import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { cartPage } from './cart.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { cartPageRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    cartPageRoutingModule
  ],
  declarations: [cartPage]
})
export class cartPageModule {}
