import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { myorderPage } from './myorder.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { myorderPageRoutingModule } from './myorder-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: myorderPage }]),
    myorderPageRoutingModule,
  ],
  declarations: [myorderPage]
})
export class myorderPageModule {}
