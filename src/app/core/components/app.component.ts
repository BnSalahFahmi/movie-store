import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  template: `
   <div class="main-container">
    <app-header></app-header>
    <div class="content-container">
      <router-outlet></router-outlet>
    </div>
   </div>
  `,
  styles: [`
  .main-container {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .content-container {
    margin-top: 50px;
    overflow: auto !important;
    width: 100% !important;
  }
  `]
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtbIjBSEeHZ07v7IMcjmlMlatVASoxQXc',
      authDomain: 'movies-store-54267.firebaseapp.com',
    });
  }
}
