import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myForm:FormGroup;

  constructor(
    public fb:FormBuilder
  ) { 
    this.myForm = fb.group({
      email:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required,Validators.min(8)])]
    });
  }

  ngOnInit() {
    this.myForm.get("email").setValue("mymail@angular.io");
  }

  submit(){
    let isValidForm = this.myForm.valid;
    
    if(isValidForm){
      console.log("Login successfull code",isValidForm)
    }else{
      console.log("Invalid form inputs")
    }
  }
}
