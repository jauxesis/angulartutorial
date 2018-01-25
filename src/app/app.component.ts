import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import { NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Title } from '@angular/platform-browser';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public router:Router,
    public route:ActivatedRoute,
    private titleService:Title
  ){
    localStorage.setItem("LandRegistryURL","http://192.81.215.180:8080/landRegistry/");
  }

  ngOnInit(){
    // the title code we need place here
    this.router.events
    .filter((event)=>event instanceof NavigationEnd)
    .map(()=>this.route)
    .map((route)=>{
      while(route.firstChild) route = route.firstChild;
      return route;
    })
    .filter((route)=>route.outlet === 'primary')
    .mergeMap((route)=>route.data)
    .subscribe((event)=>{
      this.titleService.setTitle(event['title']);
    })
  }
}
