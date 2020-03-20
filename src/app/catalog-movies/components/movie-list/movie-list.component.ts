import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie.model';
import { MoviesService } from './../../services/movies.service';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-movie-list',
  template: `
  <div class="movies-container" *ngIf='movies'>
    <div class="row col-lg-12 search-bar">
        <div class="col-6 col-md-6 pull-left">
            <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search for a movie ..." (input)="onSearchChange($event.target.value)">
            </div>
        </div>
        <div class="col-6 col-md-6 pull-right">
            <select name="categories" id="custom-select" (change)="getMoviesByCateg($event.target.value)">
                <option value="">-- Category --</option>
                <option *ngFor="let category of categories" value="{{category}}">{{category}}</option>
            </select>
        </div>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12" style="display: flex !important;
    flex-wrap: wrap;">
        <app-movie-item *ngFor="let movie of movies" [movie]="movie"></app-movie-item>
    </div>
</div>
<mat-progress-spinner *ngIf="loading" class="spinner" color="primary" mode="indeterminate" strokeWidth="2" [diameter]="50" value="50"></mat-progress-spinner>
  `,
  styles: [`
.pull-left {
    padding-left: 26px;
}
.pull-right {
    padding-right: 0px;
    text-align: right;
}
select:not([multiple]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 50%;
    background-repeat: no-repeat;
    padding: 4px 6px;
    padding-right: 1.5em;
    border-radius: 1px !important;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
    font-size: 15px;
    width: 250px;
}
#custom-select {
    border-radius: 0 
}
.has-search input {
    font-size: 15px;
    height: 32px;
    border-radius: 1px;
    line-height: 4;
}
.has-search .form-control {
    padding-left: 2.375rem;
}
.has-search .form-control:focus {
  box-shadow: 0 0 0 0.1rem rgba(0,123,255,.25) !important;
}
.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    line-height: 33px;
    text-align: center;
    pointer-events: none;
    color: #aaa;
    padding-left: 10px;
}
.search-bar {
    margin-top: 20px;
}
.has-search {
    width: 50%;
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
    private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.catalogService.fetchMovies().subscribe(
      (movies) => {
        this.loading = false;
        this.movies = movies;
      }
    );
    this.selectedCateg = 0;
    this.categories = this.categoriesService.getCategories();
  }

  getMoviesByCateg(category: string) {
    this.movies = this.catalogService.getMoviesByCateg(category);
  }

  onSearchChange(query: string) { 
    this.movies = this.catalogService.getMoviesByName(query);
  }

}
