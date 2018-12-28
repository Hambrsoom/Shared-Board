import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import { HomeComponent } from './home/home.component';
import { GroupsService } from './groups.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {RequestPasswordService} from "./request-password.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, GroupsService, RequestPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
