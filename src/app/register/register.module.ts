import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { registerPage } from './register.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { registerPageRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    registerPageRoutingModule
  ],
  declarations: [registerPage]
})
export class registerPageModule {}
