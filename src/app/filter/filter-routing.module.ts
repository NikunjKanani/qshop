import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { filterPage } from './filter.page';

const routes: Routes = [
  {
    path: '',
    component: filterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class filterPageRoutingModule {}
