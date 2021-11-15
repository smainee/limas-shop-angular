import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/routes/home/home.component';
import { ClientLayoutComponent } from './client-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'product',
        loadChildren: () => import('@routes/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('@routes/contact/contact.module').then(m => m.ContactModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }
