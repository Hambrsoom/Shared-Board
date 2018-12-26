import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groupss = []
  constructor(private _groupService: GroupsService) { }

  ngOnInit() {
    this._groupService.getGroups().subscribe(
        res => this.groupss = res,
        err => console.log(err)
    )
    console.log(this.groupss[0])
  }

}
