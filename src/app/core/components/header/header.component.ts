import { Component, OnInit, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreService } from './../../services/core.service';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar> 
  <mat-toolbar-row>
    <img src="./../../../assets/Movies.jpg" width=120 height=52 alt="" style="margin-right: 50px">
      <button mat-button [routerLink]="['/catalog-movies']"><i class="material-icons">video_library</i> Popular Movies</button>
      <button mat-button [routerLink]="['/catalog-series']"><i class="material-icons">subscriptions</i> Popular Series</button>
      <button mat-button [routerLink]="['/cart']"><i class="material-icons">collections</i> My Card Collection</button>
      <span class="example-spacer"></span>
      <form class="example-form">
          <mat-form-field style="margin-right: 40px">
              <mat-label>Search ...</mat-label>
              <input matInput name='filterInput' [(ngModel)]="filterQuery" (keyup)="onSearch()"> 
            </mat-form-field>
      </form>
      <button mat-button mat-icon-button><mat-icon>account_circle</mat-icon></button>
    </mat-toolbar-row>
  </mat-toolbar>
  `,
  styles: [`
  mat-toolbar{
    background-color: #fff;
    position: fixed;
    top: 0px !important;
    z-index: 100000000000000;
  } 
  .mat-toolbar{
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }
  
  .example-icon {
    padding: 0 14px;
}
  
.example-spacer {
   flex: 1 1 auto;
}
  mat-form-field.mat-form-field {
    font-size: 15px;
    margin-right: 20px;
    margin-top: 7px;
  }
  .mat-toolbar-row, .mat-toolbar-single-row{
    height: 54px;
  }
  .mat-toolbar-multiple-rows{
    min-height: 54px;
  }
  `]
})
export class HeaderComponent implements OnInit {

  filterQuery: string;
  constructor(private coreService: CoreService) { }

  ngOnInit() {
  }

  onSearch() {
    this.coreService.pushQuery(this.filterQuery);
  }

}
