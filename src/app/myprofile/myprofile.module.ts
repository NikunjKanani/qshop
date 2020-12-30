import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { myprofilePage } from './myprofile.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { myprofilePageRoutingModule } from './myprofile-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: myprofilePage }]),
    myprofilePageRoutingModule,
  ],
  declarations: [myprofilePage]
})
export class myprofilePageModule {}
