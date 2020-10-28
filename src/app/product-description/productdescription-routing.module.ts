import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productdescriptionPage } from './productdescription.page';

const routes: Routes = [
  {
    path: '',
    component: productdescriptionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productdescriptionPageRoutingModule {}
