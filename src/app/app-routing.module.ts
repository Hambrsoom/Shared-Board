import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},//can't access when the use is logged in
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
