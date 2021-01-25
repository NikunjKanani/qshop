import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { shippingaddressPage } from './shippingaddress.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { shippingaddressPageRoutingModule } from './shippingaddress-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: shippingaddressPage }]),
    shippingaddressPageRoutingModule,
  ],
  declarations: [shippingaddressPage]
})
export class shippingaddressPageModule {}
