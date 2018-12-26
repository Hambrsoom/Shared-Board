import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { GroupsService } from '../groups.service';
=======

>>>>>>> 690a5d44eba41791ade571844d868e4147b5c93e
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  groupss = []
  constructor(private _groupService: GroupsService) { }

  ngOnInit() {
    this._groupService.getGroups().subscribe(
        res => this.groupss = res,
        err => console.log(err)
    )
    console.log(this.groupss[0])
=======

  constructor() { }

  ngOnInit() {

>>>>>>> 690a5d44eba41791ade571844d868e4147b5c93e
  }

}
