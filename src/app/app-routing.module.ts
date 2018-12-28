import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
//import { GroupsComponent } from "./groups/groups.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AuthGuard } from './auth.guard';
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";



const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-page', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
