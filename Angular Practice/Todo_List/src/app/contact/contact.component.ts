import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    
    <div class="main">
    <h2>
      Contact works!
    </h2>
    <br>
    <a routerLink="add"> Add Contact</a> <br>
    <a routerLink="edit/201"> Edit Contact</a> <br>
    <router-outlet> </router-outlet>
  </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
