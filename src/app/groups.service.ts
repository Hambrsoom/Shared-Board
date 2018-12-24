import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private _groupsUrl = "http://localhost:3001/api/events"
  constructor(private http: HttpClient) { }

  //method for groups


}
