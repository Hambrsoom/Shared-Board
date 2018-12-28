import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private _resetPasswordUrl = "http://localhost:3001/api/home";

  constructor(private http: HttpClient) { }

  resetPassword(user){
    return this.http.post<any>(this._resetPasswordUrl, user)
  }
}
