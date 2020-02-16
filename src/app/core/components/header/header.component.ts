import { Component, OnInit } from '@angular/core';
import { CoreService } from './../../services/core.service';

@Component({
  selector: 'app-header',
  template: `
  <mat-drawer-container class="global-container" autosize>
    <mat-drawer #drawer class="sidenav" mode="side">
            <mat-nav-list>
                    <a mat-list-item routerLink="catalog-movies" routerLinkActive="active">
                            <fa-icon class="with-margin-right" icon="video"></fa-icon>
                            Popular Movies
                    </a>
                    <a mat-list-item routerLink="catalog-series" routerLinkActive="active">
                        <fa-icon class="with-margin-right" icon="film"></fa-icon>
                        Popular Series
                    </a>
                    <a mat-list-item routerLink="cart" routerLinkActive="active">
                        <fa-icon class="with-margin-right" icon="shopping-cart"></fa-icon>
                        My Card Collection
                    </a>
                </mat-nav-list>
    </mat-drawer>

    <div class="sidenav-content">
            <div class="toolbar">
                    <mat-toolbar>
                    <a class="navbar-brand" href="#">MOVIE STORE</a>
                        <div class="branding">
                            <button class="d-md-none" mat-icon-button (click)="drawer.toggle()">
                                <fa-icon icon="bars"></fa-icon>
                            </button>
                            <span class="d-none d-md-inline">
                                <button mat-button class="nav-button" routerLink="catalog-movies" routerLinkActive="active">
                                    <fa-icon class="with-margin-right" icon="video"></fa-icon>
                                    Popular Movies
                                </button>
                                <button mat-button class="nav-button" routerLink="catalog-series" routerLinkActive="active">
                                    <fa-icon class="with-margin-right" icon="film"></fa-icon>
                                    Popular Series
                                </button>
                                <button mat-button class="nav-button" routerLink="cart" routerLinkActive="active">
                                    <fa-icon class="with-margin-right" icon="shopping-cart"></fa-icon>
                                    My Card Collection
                                </button>
                            </span>
                        </div>
                        <a class="github-link" mat-icon-button class="link d-none d-sm-inline" href="https://github.com/BnSalahFahmi/movie-store"
                            target="_blank">
                            <fa-icon class="github" [icon]="['fab','github']"></fa-icon>
                        </a>
                    </mat-toolbar>
                </div>
    </div>
</mat-drawer-container>
  `,
  styles: [`
  .mat-drawer-container {
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
}

.mat-toolbar {
    height: 54px !important;    
    margin-top: -2px;
    overflow-y: hidden;
    color: #424242;
    border-bottom: 1px solid #EEE;
    position: fixed;
    box-shadow: 0 3px 3px -3px rgba(0,0,0,.2);
}
.branding {
  flex: 1 1 auto;
}

.navbar-brand {
    font-size: 20px;
    letter-spacing: 0.1em;
    text-decoration: none;
    display: inline-block;
    pointer-events: auto;
    margin-right: 50px;
    color: #311B92 !important;
}

.logo {
    height: 30px;
    margin: 6px 4px 3px 0;
    margin-right: 40px;
}

.with-margin-right {
    margin-right: 5px;
}

a:hover {
    color: #FFF !important;
}

mat-sidenav {
    width: 240px;
}

.mat-list-item {
    padding-left: 10px;
    &:hover {
        color: rgba(0,0,0,.87) !important;
    }
}

mat-drawer {
    position: fixed !important;
    width: 230px;
}

@media screen and (min-width : 1000px) {
    .sidenav {
      display:none;
    }
}

mat-search-bar {
    margin-right: 8px;
}

a:hover {
    color: #424242 !important;
}

::ng-deep .mat-tab-body-wrapper {
    background: #ffffff !important;
    border-left: 1px solid #e9ebee !important;
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
