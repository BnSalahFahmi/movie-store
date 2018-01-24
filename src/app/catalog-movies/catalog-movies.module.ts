import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CatalogMoviesRoutingModule } from './catalog-movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesRootComponent } from './components/movies-root/movies-root.component';
import { MoviesItemDetailsComponent } from './components/movies-item-details/movies-item-details.component';
import { MoviesItemComponent } from './components/movies-item/movies-item.component';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { CategoriesService } from './services/categories.service';


@NgModule({
    declarations: [
      MoviesListComponent,
      MoviesRootComponent,
      MoviesItemDetailsComponent,
      MoviesItemComponent
      ],
      imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CatalogMoviesRoutingModule,
        SharedModule
      ],
      exports: [
        CatalogMoviesRoutingModule
      ],
      providers: [
        MoviesService,
        CategoriesService
      ]
})                 
export class CatalogMoviesModule {

}