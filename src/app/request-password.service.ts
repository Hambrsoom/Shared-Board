import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestPasswordService {
  private _requestPasswordUrl = "http://localhost:3001/api/forgotpassword"

  constructor( private http: HttpClient) { }

  requestPassword(user){
    return this.http.post<any>(this._requestPasswordUrl, user)
  }
}
