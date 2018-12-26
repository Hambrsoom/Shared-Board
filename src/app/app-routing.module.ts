import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
<<<<<<< HEAD
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent}
=======
import {GroupsComponent} from "./groups/groups.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'login', component: LoginComponent }
>>>>>>> 690a5d44eba41791ade571844d868e4147b5c93e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
