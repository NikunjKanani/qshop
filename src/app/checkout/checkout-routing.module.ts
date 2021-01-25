import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkoutPage } from './checkout.page';

const routes: Routes = [
  {
    path: '',
    component: checkoutPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class checkoutPageRoutingModule {}
