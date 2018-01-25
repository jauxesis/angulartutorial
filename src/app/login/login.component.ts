import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myForm:FormGroup;
  message:any;

  constructor(
    public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router
  ) { 
    this.myForm = fb.group({
      username:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required,Validators.min(8)])],
      optradio:['',Validators.required]
    });
  }

  ngOnInit() {
    // this.myForm.get("email").setValue("mymail@angular.io");
  }

  submit(){
    // console.log(this.myForm.value)
    if(this.myForm.valid){
      this.http.post(localStorage.getItem("LandRegistryURL")+"login",{
        "username": this.myForm.value.username, 
        "password":  this.myForm.value.password, 
        "role":  this.myForm.value.optradio
      })
      .subscribe(
        d=>{
          let dt = JSON.parse(JSON.stringify(d));
          console.log(dt)
          let body = JSON.parse(dt._body);
          console.log(body)
          let address = body.result.address;
          console.log(address)
          localStorage.setItem("LandRegistryUserAddress",address)
          if(this.myForm.value.optradio==0)   
          this.router.navigate(["/addcontract"]);
          if(this.myForm.value.optradio==1)   
          this.router.navigate(["/brokercontract"]);
          if(this.myForm.value.optradio==2)   
          this.router.navigate(["/buyercontract"]);
        },
        e=>{
          this.message = "Invalid user";
        }
      )
    }else{
      this.message = "Invalid credentials";
    }
  }

}
