import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogMoviesRoutingModule } from './catalog-movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieRootComponent } from './components/movie-root/movie-root.component';
import { MovieItemDetailsComponent } from './components/movie-item-details/movie-item-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieTrailerComponent } from './components/movie-trailer/movie-trailer.component';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';

@NgModule({
    declarations: [
      MovieListComponent,
      MovieRootComponent,
      MovieItemDetailsComponent,
      MovieItemComponent,
      MovieTrailerComponent
      ],
      imports: [
        HttpClientModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        CatalogMoviesRoutingModule
      ],
      exports: [
        CatalogMoviesRoutingModule
      ],
      providers: [
        MoviesService
      ]
}) 
export class CatalogMoviesModule {

}