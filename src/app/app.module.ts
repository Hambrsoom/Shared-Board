import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { GroupsService } from './groups.service';
=======
>>>>>>> 690a5d44eba41791ade571844d868e4147b5c93e

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
