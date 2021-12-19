import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }
