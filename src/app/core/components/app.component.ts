import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  template: `
   <app-header></app-header>
   <router-outlet style="margin-top: 50px"></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBtbIjBSEeHZ07v7IMcjmlMlatVASoxQXc",
      authDomain: "movies-store-54267.firebaseapp.com",
    });
  }
}
