import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@routes/home/home.component';
import { ClientLayoutComponent } from './client-layout.component';

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
        path: 'crud',
        loadChildren: () =>
          import('@routes/crud/crud.module').then((m) => m.CrudModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientLayoutRoutingModule {}
