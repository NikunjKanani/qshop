import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.loginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.registerPageModule)
  },
  {
    path: 'subcat/:id',
    loadChildren: () => import('./subcat/subcat.module').then( m => m.SubcatPageModule)
  },
  {
    path: 'product-list/:id',
    loadChildren: () => import('./product-list/productlist.module').then( m => m.productlistPageModule)
  },
  {
    path: 'childcat/:id',
    loadChildren: () => import('./childcat/childcat.module').then( m => m.ChildcatPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
