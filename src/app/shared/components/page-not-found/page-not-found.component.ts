import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: '<img src="assets/404.jpg" alt="Page not found">',
  styles: [`
  img{
    position: absolute;
    top: 30%;
    left: 27%;
  }
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
