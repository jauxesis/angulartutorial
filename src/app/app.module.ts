import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { RouterModule , Routes } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { LoginComponent } from './login/login.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SellercontractlistComponent } from './sellercontractlist/sellercontractlist.component';
import { BrokercontractlistComponent } from './brokercontractlist/brokercontractlist.component';
import { BuyercontractlistComponent } from './buyercontractlist/buyercontractlist.component';
import { GetbuyerbiddetailsComponent } from './getbuyerbiddetails/getbuyerbiddetails.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { ContractdetailsComponent } from './contractdetails/contractdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent, 
    ViewuserComponent,
    LoginComponent,
    AddContractComponent,
    NavbarComponent,
    SellercontractlistComponent,
    BrokercontractlistComponent,
    BuyercontractlistComponent,
    GetbuyerbiddetailsComponent,
    ContractdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,   ModalModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot()
  ], 
  providers: [
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
