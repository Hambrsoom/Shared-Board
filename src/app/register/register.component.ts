import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {}
  constructor() { }

  ngOnInit() {
  }

  registerUser() {
    //talk to the back-end here
    console.log(this.registerUserData)//for testing purposes only!
  }

}
