import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { reviewPage } from './review.page';

const routes: Routes = [
  {
    path: '',
    component: reviewPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class reviewPageRoutingModule {}
