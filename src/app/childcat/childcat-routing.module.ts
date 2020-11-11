import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildcatPage } from './childcat.page';

const routes: Routes = [
  {
    path: '',
    component: ChildcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildcatPageRoutingModule {}
