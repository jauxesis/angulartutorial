import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import * as ipfs from 'ipfs-js'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  @ViewChild('fileInput1') fileInput1: ElementRef; 
  myForm:FormGroup;
  message:any;
  input:any; 
  form: FormGroup; 

  successmsg:string = '';
  errormsg:string = '';
  
  constructor(
    public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router,
    
  ) { 
    this.myForm = fb.group({
      description:['',Validators.compose([Validators.required])],
      fileHash:['',Validators.compose([Validators.required])],
      price:['',Validators.required]
    });
  }

  ngOnInit() {
    ipfs.setProvider({host: 'localhost', port: '5001'}) 
  }

  submit(){
    console.log(this.myForm,this.myForm.valid);
    if(this.myForm.valid){

      ipfs.addJson(this.input,(err,data)=>{ 
          console.log(err);
          console.log("filehash ",data);
          console.log(JSON.stringify({
            "sellerAddress":localStorage.getItem("LandRegistryUserAddress"),
            "description": this.myForm.value.description, 
            "fileHash": data, 
            "price":  this.myForm.value.price
          }));

          if(data){

            this.http.post(localStorage.getItem("LandRegistryURL")+"propertyContractCreation",{
              "sellerAddress":localStorage.getItem("LandRegistryUserAddress"),
              "description": this.myForm.value.description, 
              "fileHash": data, 
              "price":  this.myForm.value.price
            })
            .subscribe(
              d=>{
                let dt = JSON.parse(JSON.stringify(d));
                console.log(dt)
                let body = JSON.parse(dt._body);
                console.log(body)
      
                alert("Your contract address is:"+body.result);
                this.successmsg = "Your contract address is:"+body.result;

                setTimeout(()=>{this.successmsg='';},2500);
              },
              e=>{
                this.errormsg = "Invalid user";
              }
            )

          }
          if(err){
            this.errormsg = "Invalid file";
          }
      

    });
    }else{
      this.errormsg = "Invalid form";
    }
  }




  onFileChange1(event) { 
      let reader = new FileReader(); 
      if(event.target.files && event.target.files.length > 0) { 
      let file = event.target.files[0];reader.readAsDataURL(file); 
      reader.onload = () => { 
      this.myForm.get('fileHash').setValue({ 
      filename: file.name, 
      filetype: file.type, 
      filesize: file.size, 
      value: reader.result.split(',')[1] 
    }) 
     this.input = { 
       path:file.name, 
       content:reader.result 
     } 
    }; 
 } 
} 
    

    Formcall(){ 
        console.log(this.input) 
        ipfs.addJson(this.input,function(err,data){ 
        console.log(err) 
        console.log(data) 
      }); 
      } 
}
