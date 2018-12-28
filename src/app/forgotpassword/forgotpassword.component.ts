import { Component, OnInit } from '@angular/core';
import {RequestPasswordService} from "../request-password.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  UserData = {}
  constructor(private _pass : RequestPasswordService) { }

  ngOnInit() {
  }
  requestPassword() {
    this._pass.requestPassword(this.UserData).subscribe(
      res => console.log(res),
      err => console.log(err)//log them for now
    )
  }

}
