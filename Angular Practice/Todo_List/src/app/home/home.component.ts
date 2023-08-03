import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name= "Rifat Hossain"
  salary=50000;
  yearly=this.salary*12
  salColor='green'
  fontSize='40px'
  textAllign='center'
  isDisable=true;
  PropertyBinding="PropertyBinding"
  clickFunction(){
    alert(this.name +' \n Salary:'+ this.salary+ '\nyearly Salary:'+this.yearly);
  }
  clickFunctionA(name:string){
    alert(name);
  }
}
