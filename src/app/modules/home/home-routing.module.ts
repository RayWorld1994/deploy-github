import { CartListComponent } from './components/cart-list/cart-list.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'cart',
        component: CartListComponent,
      },
      {
        path: 'category/:id',
        component: ProductListComponent,
      },
      {
        path: 'search/:name',
        component: ProductListComponent,
      },
      {
        path: 'product/:name',
        component: DetailProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
