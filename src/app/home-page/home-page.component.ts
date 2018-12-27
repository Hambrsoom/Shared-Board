import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  groupss = []
  constructor(private _groupService: GroupsService) { }

  ngOnInit() {
    this._groupService.getGroups()
      .subscribe(
        res => this.groupss = res,
        err => console.log(err)
      )
  }

}
