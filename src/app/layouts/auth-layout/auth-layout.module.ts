import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthLayoutRoutingModule } from './auth-layout-routing.module'
import { AuthLayoutComponent } from './auth-layout.component'
import { AuthenticationComponent } from './authentication/authentication.component'
import { LoginComponent } from './login/login.component'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ComponentsModule } from 'app/components/components.module'

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
]

@NgModule({
  declarations: [AuthLayoutComponent, AuthenticationComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
})
export class AuthLayoutModule {}
