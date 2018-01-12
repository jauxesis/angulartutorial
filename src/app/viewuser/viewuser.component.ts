import { Component, OnInit } from '@angular/core';

import { Router,  ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  userID:string;

  constructor(
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    let getUserID = this.route.snapshot.paramMap.get("id");
    console.log(getUserID)
    this.userID = getUserID;
  }

}
