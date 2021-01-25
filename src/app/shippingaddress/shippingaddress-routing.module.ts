import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { shippingaddressPage } from './shippingaddress.page';

const routes: Routes = [
  {
    path: '',
    component: shippingaddressPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class shippingaddressPageRoutingModule {}
