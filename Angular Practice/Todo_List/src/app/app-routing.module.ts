import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent,children:[
    {path:"add",component:AddcontactComponent},
    {path:"edit/:id",component:AddcontactComponent}]},
    {path:"access",loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
    {path:"log-in",loadComponent:()=>import('./log-in/log-in.component').then(opt=>opt.LogInComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
