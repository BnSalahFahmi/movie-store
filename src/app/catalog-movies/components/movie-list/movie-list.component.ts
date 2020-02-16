import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie.model';
import { MoviesService } from './../../services/movies.service';
import { CategoriesService } from './../../services/categories.service';
import { CommonService } from '../../../shared/services/common-service.service';


@Component({
  selector: 'app-movie-list',
  template: `
  <div class="row col-lg-12" *ngIf='movies'>
    <div class="col-lg-3 col-md-3 col-sm-3">
        <mat-card class="categ-card" style="margin-top: 20px;">
            <mat-card-header>
                <mat-card-title><i class="material-icons" style="margin-right: 5px;">list</i> Catégories</mat-card-title>
            </mat-card-header>
            <mat-card-content>
            <ul class="list-group" (click)="setSelectedCateg(0)">
            <li class="list-group-item d-flex justify-content-between align-items-center active" [class.active]="0 === selectedCateg" (click)="getFilmsByCateg('All')">
                All
                <span class="badge badge-primary">{{getNumberByCateg('All')}}</span>
            </li>
            </ul>
                <ul class="list-group" *ngFor="let categ of categories; let i : index" (click)="setSelectedCateg(i)">
                    <li class="list-group-item d-flex justify-content-between align-items-center" [class.active]="i === selectedCateg" (click)="getFilmsByCateg(categ)">
                        {{categ}}
                        <span class="badge badge-primary">{{getNumberByCateg(categ)}}</span>
                    </li>
                </ul>
            </mat-card-content>
        </mat-card>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-9" style="display: flex !important;margin-top: 19px;
    flex-wrap: wrap;">
    <app-movie-item *ngFor="let movie of movies | filter:filterQuery" [movie]="movie"></app-movie-item>
    </div>
</div>
<mat-progress-spinner *ngIf="loading" class="spinner" color="primary" mode="indeterminate" strokeWidth="2" [diameter]="50" value="50"></mat-progress-spinner>
  `,
  styles: [`
  .example-container {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,0), 0 1px 5px 0 rgba(0,0,0,.12) !important;
  }
  
  .example-header {
    min-height: 64px;
    padding: 8px 24px 0;
  }
  
  .mat-form-field {
    font-size: 14px;
    width: 100%;
  }
  
  .mat-table {
    overflow: auto;
    max-height: 500px;
  }
  .card-container {
    margin: 5px;
    display: flex !important;
    flex-wrap: wrap;
  }
  
  .example-header-image {
    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
    background-size: cover;
  }

  .mat-button.mat-icon-button{
      line-height: 0px;
      min-width: 10px;
      padding: 0px;
      width: 30px;
      height: 30px;
      border-radius: 0px;
  }
  .mat-card-content, .mat-card-header .mat-card-title, .mat-card-subtitle {
    font-size: 16px;
   }
   .mat-card-content ul{
     margin-bottom: 2px;
   }
   .mat-card-content ul:hover{
     cursor: pointer;
   }
   .list-group-item{
     padding: 7px 15px;
   }
   .mat-card-header {
    background: #1A237E;
    color: white;
}
.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {
  border: none !important;
  border-left: 5px solid red !important;
}
.categ-card .mat-card-title {
  display: flex !important;
  padding: 8px 6px 5px 4px !important;
  line-height: 25px !important;
}
  `]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  loading: boolean = true;
  categories: string[];
  selectedCateg = 0;
  filterQuery: string;

  constructor(
    private catalogService: MoviesService,
    private categoriesService: CategoriesService,
    private commonService: CommonService) {
  }

  ngOnInit() {
    this.catalogService.fetchMovies().subscribe(
      (movies) => {
        this.loading = false;
        this.movies = movies;
      },
      (error) => {

      }
    )
    this.selectedCateg = 0;
    this.categories = this.categoriesService.getCategories();
    this.commonService.filterListener.subscribe(
      (newQuery: string) => {
        this.filterQuery = newQuery;
      }
    )
  }

  setSelectedCateg(index: number) {
    this.selectedCateg = index;
  }

  getFilmsByCateg(categorie: string) {
    this.movies = this.catalogService.getFilmsByCateg(categorie);
  }

  getNumberByCateg(categ: string) {
    return this.catalogService.getNumberByCateg(categ);
  }

}
