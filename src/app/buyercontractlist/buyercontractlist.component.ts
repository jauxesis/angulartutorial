import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-buyercontractlist',
  templateUrl: './buyercontractlist.component.html',
  styleUrls: ['./buyercontractlist.component.css']
})
export class BuyercontractlistComponent implements OnInit {

  contractlist:any;
  bidprice='';
    myForm:FormGroup;
    message:any;
 
  constructor(
    public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router
  ) { 
   
  }

  ngOnInit() {
    this.buyercontractlist()
  }

  setBid(ls){
    console.log("*****************",ls);
    this.http.post(localStorage.getItem("LandRegistryURL")+"setBid/"+ls.contractAddress,{
        "address":localStorage.getItem("LandRegistryUserAddress"),
        "price":this.bidprice
          })
    .subscribe(
      d=>{
        console.log("user contract #########################")
        let dt = JSON.parse(JSON.stringify(d));
        let body = JSON.parse(dt._body);
       alert(body.result.transactionHash);
      },
      e=>{
        alert("Contract not found");
        this.message = "Invalid user";
      }
    )
  }

  buyercontractlist(){
       this.http.get(localStorage.getItem("LandRegistryURL")+"getBuyerContactDetails/"+localStorage.getItem("LandRegistryUserAddress"))
       .subscribe(
         d=>{
           let dt = JSON.parse(JSON.stringify(d));
           let body = JSON.parse(dt._body);
           this.contractlist.push=body.result;
         },
         e=>{
           alert("Contract not found");
           this.message = "Invalid user";
         }
       )
   }
}
