import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';


@NgModule({
  declarations: [
    RegisterComponent,
    DashbordComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
