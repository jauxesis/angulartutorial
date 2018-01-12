import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { RouterModule , Routes } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    ViewuserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,AppRoutingModule,
    FormsModule, ReactiveFormsModule
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
