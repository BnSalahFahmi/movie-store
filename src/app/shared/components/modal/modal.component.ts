import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  template: `
  <h2 mat-dialog-title>{{title}}</h2>
  <mat-dialog-content>{{content}}</mat-dialog-content>
  <mat-dialog-actions>
  <button mat-button [mat-dialog-close]="true">Ok</button>
  </mat-dialog-actions>
  `,
  styles: []
})
export class ModalComponent implements OnInit{

  title: string;
  content: string;
  msg: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){
    this.title = this.data.title;
    this.content = this.data.content;
    this.msg = this.data.msg;
  }

}