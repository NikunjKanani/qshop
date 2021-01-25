import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paymentmethodPage } from './paymentmethod.page';

const routes: Routes = [
  {
    path: '',
    component: paymentmethodPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class paymentmethodPageRoutingModule {}
