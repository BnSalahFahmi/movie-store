import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
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