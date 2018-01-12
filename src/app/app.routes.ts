import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { LoginComponent } from './login/login.component';


const routes:Routes = [
    {
        path:"",
        component: WelcomeComponent,
        pathMatch:"full",
        data:{
            title:"Welcome"
        }
    },
    {
        path:"home",
        component: HomeComponent,
        data:{
            title:"Home"
        }
    },
    {
        path:"user/:id",
        component:ViewuserComponent,
        data:{
            title:"View User"
        }
    },
    {
        path:"login",
        component:LoginComponent,
        data:{
            title:"Login"
        }
    },
    {
        path: "**",
        component: WelcomeComponent,
        data:{
            title: "Page not found"
        }
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {}