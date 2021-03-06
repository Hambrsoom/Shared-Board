import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groupss =[]
  constructor(private _groupService: GroupsService) { }

  ngOnInit() {
    this._groupService.getGroups()
      .subscribe(
      res => this.groupss = res,
      err => console.log(err)
      )
  }

}
