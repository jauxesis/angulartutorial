import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sellercontractlist',
  templateUrl: './sellercontractlist.component.html',
  styleUrls: ['./sellercontractlist.component.css']
})
export class SellercontractlistComponent implements OnInit {
  @ViewChild('successmodal') successmodal:ElementRef;
  
  modalRef: BsModalRef;
  config2 = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
  contractAddress='';
  brokerAddress='';
contractlist:any;
brokerList:any;
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
   this.sellercontractlist();
   this.getBrokerList();
  }


  //getUserContactDetails/0x4fd6542936b0e8cddd592562360a07282e97ad16

  sellercontractlist(){
   
      this.http.get(localStorage.getItem("LandRegistryURL")+"getUserContactDetails/"+localStorage.getItem("LandRegistryUserAddress"))
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
          this.message = "";
        }
      )
   
  }


  getBrokerList(){
    
       this.http.get(localStorage.getItem("LandRegistryURL")+"getBrokerList/")
       .subscribe(
         d=>{
           console.log("user contract #########################")
           let dt = JSON.parse(JSON.stringify(d));
           console.log(dt)
           let body = JSON.parse(dt._body);
           console.log(body)
          this.brokerList=body.result;
          console.log("brokerList #############",this.brokerList)
         //  alert("Your contract address is:"+body.result);
         },
         e=>{
           alert("Contract not found");
           this.message = "";
         }
       )
    
   }
   brokerSelection(){
    console.log("brokerAddress",this.brokerAddress);
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


    contractDetails(contractAddress){
        localStorage.setItem("contractAddress",contractAddress);
        this.router.navigate(["/contractdetails"]);
    }

    addBroker(){
      this.http.post(localStorage.getItem("LandRegistryURL")+"addBroker/",
      {
      "contractAddress":this.contractAddress,
      "brokerAddress":this.brokerAddress
      })
      .subscribe(
        d=>{
          console.log("add Broker #########################")
        
          let dt = JSON.parse(JSON.stringify(d));
          console.log(dt)
          let body = JSON.parse(dt._body);
          console.log(body.result.transactionHash);
          alert(body.result.transactionHash);
         
        },
        e=>{
          alert("Contract not found");
        }
      )
    }
}
