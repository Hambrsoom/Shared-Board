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
import { GroupsService } from './groups.service';
import { HomePageComponent } from './home-page/home-page.component';
import { RequestPasswordService } from "./request-password.service";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { AuthGuard } from './auth.guard';
import { ShowHidePasswordModule } from "ngx-show-hide-password";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomePageComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ShowHidePasswordModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, GroupsService, RequestPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
