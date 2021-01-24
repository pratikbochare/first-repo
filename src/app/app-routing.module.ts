import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/auth/login/login.component';
import { SignupFormComponent } from './core/components/auth/signup-form/signup-form.component';

const routes: Routes = [
  // { path: "", component: LoginComponent }
  { path: "", component: SignupFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
