import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addaddressPage } from './addaddress.page';

const routes: Routes = [
  {
    path: '',
    component: addaddressPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addaddressPageRoutingModule {}
