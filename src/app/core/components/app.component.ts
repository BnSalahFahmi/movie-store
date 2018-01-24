import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-header></app-header>
   <router-outlet style="margin-top: 50px"></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  
}
