import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@routes/home/home.component';
import { ClientLayoutComponent } from './client-layout.component';
import { AboutUsModule } from '../../routes/about-us/about-us.module';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('@routes/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('@routes/product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('@routes/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'wishlist',
        loadChildren: () =>
          import('@routes/wishlist/wishlist.module').then((m) => m.WishlistModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('@routes/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'crud',
        loadChildren: () =>
          import('@routes/crud/crud.module').then((m) => m.CrudModule),
      },
      {
        path: 'aboutus',
        loadChildren: () =>
        import('@routes/about-us/about-us.module').then((m) => m.AboutUsModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientLayoutRoutingModule {}
