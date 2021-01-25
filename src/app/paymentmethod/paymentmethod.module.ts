import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { paymentmethodPage } from './paymentmethod.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { paymentmethodPageRoutingModule } from './paymentmethod-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: paymentmethodPage }]),
    paymentmethodPageRoutingModule,
  ],
  declarations: [paymentmethodPage]
})
export class paymentmethodPageModule {}
