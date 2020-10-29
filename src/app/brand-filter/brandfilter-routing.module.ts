import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { brandfilterPage } from './brandfilter.page';

const routes: Routes = [
  {
    path: '',
    component: brandfilterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class brandfilterPageRoutingModule {}
