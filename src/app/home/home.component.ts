import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groupss = []
  constructor(private _groupService: GroupsService) { }

  ngOnInit() {
    /***For the title animation****/
    const options = {
      strings: ['Innovation', 'Discovery', 'ShareBoard'],
      typeSpeed: 80,
      backSpeed: 80,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };

    const typed = new Typed('.typed-element', options);
     /***                      ***/


    this._groupService.getGroups().subscribe(
      res => this.groupss = res,
      err => console.log(err)
    )
    console.log(this.groupss[0])
  }
  }

