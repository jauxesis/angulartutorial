import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contractdetails',
  templateUrl: './contractdetails.component.html',
  styleUrls: ['./contractdetails.component.css']
})
export class ContractdetailsComponent implements OnInit {
  message:any;
  contractdetails:any;
  buyerDetails:any;
  ownerDetails:any;
  contractAddress='';
  constructor(
    public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router
  ) { 
   
  }
  ngOnInit() {
    this.contractDetails();
    this.getBuyerDetails();
    this.getOwnerDetails();
    this.contractAddress=localStorage.getItem("contractAddress");
  }

  contractDetails(){
       this.http.get(localStorage.getItem("LandRegistryURL")+"getPropertyDetails/"+localStorage.getItem("contractAddress"))
       .subscribe(
         d=>{
           console.log("contractDetails #########################")
           let dt = JSON.parse(JSON.stringify(d));
           console.log(dt)
           let body = JSON.parse(dt._body);
           console.log(body)
          this.contractdetails=body.result;
          console.log(this.contractdetails)
         },
         e=>{
           alert("Contract not found");
           this.message = "Invalid user";
         }
       )
    
   }  



   getBuyerDetails(){
    this.http.get(localStorage.getItem("LandRegistryURL")+"getConfirmBuyerDetails/"+localStorage.getItem("contractAddress"))
    .subscribe(
      d=>{
        console.log("getBuyerDetails #########################")
        let dt = JSON.parse(JSON.stringify(d));
        console.log(dt)
        let body = JSON.parse(dt._body);
        console.log(body)
       this.buyerDetails=body.result;
       console.log(this.buyerDetails)
      },
      e=>{
        alert("Contract not found");
        this.message = "Invalid user";
      }
    )
 
}  


getOwnerDetails(){
  this.http.get(localStorage.getItem("LandRegistryURL")+"getOwnerDetails/"+localStorage.getItem("contractAddress"))
  .subscribe(
    d=>{
     
      let dt = JSON.parse(JSON.stringify(d));
      console.log(dt)
      let body = JSON.parse(dt._body);
      console.log(body)
     this.ownerDetails=body.result;
     console.log("getOwnerDetails #########################")
     console.log(this.ownerDetails)
    },
    e=>{
      alert("Contract not found");
      this.message = "Invalid user";
    }
  )

}  


}
