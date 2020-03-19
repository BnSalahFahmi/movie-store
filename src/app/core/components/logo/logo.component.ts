import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: '<img src="assets/favicon.ico" alt="Angular Logo"><i>NGULAR 5</i>',
  styles: [`
  :host{
    width: 150px;
}
  `]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
