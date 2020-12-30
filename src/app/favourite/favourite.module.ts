import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { favouritePage } from './favourite.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { favouritePageRoutingModule } from './favourite-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: favouritePage }]),
    favouritePageRoutingModule,
  ],
  declarations: [favouritePage]
})
export class favouritePageModule {}
