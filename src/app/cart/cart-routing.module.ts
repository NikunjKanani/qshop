import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cartPage } from './cart.page';

const routes: Routes = [
  {
    path: '',
    component: cartPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cartPageRoutingModule {}
