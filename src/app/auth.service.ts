 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3001/api/register"
  private _loginUrl = "http://localhost:3001/api/login"
  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){//user is an object that should be username OR email
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return localStorage.getItem('token')
  }
  logoutUser() {
    this._router.navigate(['/login'])
    return localStorage.removeItem('token')
  }
  
  getToken() {
    return localStorage.getItem('token')
  }

}
