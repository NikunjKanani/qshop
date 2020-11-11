import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildcatPageRoutingModule } from './childcat-routing.module';

import { ChildcatPage } from './childcat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildcatPageRoutingModule
  ],
  declarations: [ChildcatPage]
})
export class ChildcatPageModule {}
