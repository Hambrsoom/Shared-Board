import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
   // console.log(this.loginUserData)//ONLY for testing purposes -- this is where you call  backend api
    this._auth.loginUser(this.loginUserData).subscribe(
      res => console.log(res),
      err => console.log(err)//log them for now
    )
  }
}
