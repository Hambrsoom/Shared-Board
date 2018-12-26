import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class GroupsService {

  private _groupsUrl = "http://localhost:3001/api/home";
  constructor(private http: HttpClient) { }
  getGroups() {
    return this.http.get<any>(this._groupsUrl);
  }
}
