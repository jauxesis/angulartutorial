import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-brokercontractlist',
  templateUrl: './brokercontractlist.component.html',
  styleUrls: ['./brokercontractlist.component.css']
})
export class BrokercontractlistComponent implements OnInit {
  @ViewChild('successmodal') successmodal:ElementRef;
  modalRef: BsModalRef;
  config2 = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
  sellerAddress='';
  contractAddress='';
  buyerlist:any;
  contractlist:any;
  
    myForm:FormGroup;
    message:any;
 
  constructor(
    public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router,private modalService: BsModalService
  ) { 
   
  }


  ngOnInit() {
    this.brokercontractlist();
    this.getBuyerList();
  }
  brokercontractlist(){
    
       this.http.get(localStorage.getItem("LandRegistryURL")+"getBrokerContactDetails/"+localStorage.getItem("LandRegistryUserAddress"))
       .subscribe(
         d=>{
           console.log("user contract #########################")
           let dt = JSON.parse(JSON.stringify(d));
           console.log(dt)
           let body = JSON.parse(dt._body);
           console.log(body)
          this.contractlist=body.result;
          console.log(this.contractlist)
         //  alert("Your contract address is:"+body.result);
         },
         e=>{
           alert("Contract not found");
           this.message = "Invalid user";
         }
       )
    
   }


   addBuyer(){
    this.http.post(localStorage.getItem("LandRegistryURL")+"addBuyerToContract/",
    {
    "contractAddress":this.contractAddress,
    "sellerAddress":this.sellerAddress
    })
    .subscribe(
      d=>{
        console.log("add Broker #########################")
      
        let dt = JSON.parse(JSON.stringify(d));
        console.log(dt)
        let body = JSON.parse(dt._body);
        console.log(body.result.transactionHash);
        alert(body.result);
       },
      e=>{
        alert("Contract not found");
      }
    )
  }


   getBuyerList(){
       this.http.get(localStorage.getItem("LandRegistryURL")+"getSellerList/")
       .subscribe(
         d=>{
           console.log("user contract #########################")
           let dt = JSON.parse(JSON.stringify(d));
           console.log(dt)
           let body = JSON.parse(dt._body);
           console.log(body)
          this.buyerlist=body.result;
          console.log("brokerList #############",this.buyerlist)
         },
         e=>{
           alert("Contract not found");
           this.message = "Invalid user";
         }
       )
   }



   open(ls){
    this.contractAddress=ls.contractAddress;
   this.modalRef = this.modalService.show(
         this.successmodal,
           Object.assign({}, this.config2, { class: 'gray modal-md' })
       );
   }

   close(){
     this.modalRef.hide();
   }
}
