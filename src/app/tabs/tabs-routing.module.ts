import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.dashboardPageModule)
      },
      {
        path: 'browse',
        loadChildren: () => import('../browse/browse.module').then(m => m.browsePageModule)
      },
      {
        path: 'fashion',
        loadChildren: () => import('../fashion/fashion.module').then(m => m.fashionPageModule)
      },
      {
        path: 'product-list',
        loadChildren: () => import('../product-list/productlist.module').then(m => m.productlistPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.searchPageModule)
      },
      {
        path: 'filter',
        loadChildren: () => import('../filter/filter.module').then(m => m.filterPageModule)
      },
      {
        path: 'review',
        loadChildren: () => import('../review/review.module').then(m => m.reviewPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.cartPageModule)
      },
      {
        path: 'brand-filter',
        loadChildren: () => import('../brand-filter/brandfilter.module').then(m => m.brandfilterPageModule)
      },
      {
        path: 'product-description',
        loadChildren: () => import('../product-description/productdescription.module').then(m => m.productdescriptionPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
