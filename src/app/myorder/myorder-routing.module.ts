import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { myorderPage } from './myorder.page';

const routes: Routes = [
  {
    path: '',
    component: myorderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class myorderPageRoutingModule {}
