import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { settingPage } from './setting.page';

const routes: Routes = [
  {
    path: '',
    component: settingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class settingPageRoutingModule {}
