import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addaddressPage } from './addaddress.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { addaddressPageRoutingModule } from './addaddress-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: addaddressPage }]),
    addaddressPageRoutingModule,
  ],
  declarations: [addaddressPage]
})
export class addaddressPageModule {}
