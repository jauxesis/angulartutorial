import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  address:string;

  @ViewChild('address2') address2:ElementRef;

  constructor(
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
  }


  gotohome(){
    // this.router.navigate(["/home"]);
    //or
    this.router.navigateByUrl("home");
  }

  seeuser(){
    this.router.navigate(["/user","user1"]);
  }

  viewInputs(){
    console.info("Input value",this.address); 
  }

  viewInputs2(){
    let value = this.address2.nativeElement.value;
    console.log("Input value2",value)
  }

  login(){
    this.router.navigateByUrl("/login");
  }
}
