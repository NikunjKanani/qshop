import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favouritePage } from './favourite.page';

const routes: Routes = [
  {
    path: '',
    component: favouritePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class favouritePageRoutingModule {}
