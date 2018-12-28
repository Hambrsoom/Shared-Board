import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from "../reset-password.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  resetUserData = {}
  constructor(private _pass : ResetPasswordService) { }

  ngOnInit() {
  }
  resetPassword() {
    this._pass.resetPassword(this.resetUserData).subscribe(
      res => console.log(res),
      err => console.log(err)//log them for now
    )
  }

}
