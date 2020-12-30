import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { settingPage } from './setting.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { settingPageRoutingModule } from './setting-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: settingPage }]),
    settingPageRoutingModule,
  ],
  declarations: [settingPage]
})
export class settingPageModule {}
