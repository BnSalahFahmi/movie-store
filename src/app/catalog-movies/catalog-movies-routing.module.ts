import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieRootComponent } from './components/movie-root/movie-root.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemDetailsComponent } from './components/movie-item-details/movie-item-details.component';


const appRoutes: Routes = [
    {
        path: '', component: MovieRootComponent,
        children: [
            { path: 'list', component: MovieListComponent },
            { path: 'movies/:id', component: MovieItemDetailsComponent },
            { path: '', redirectTo: 'list', pathMatch:'full' }
        ]
    }
]


@NgModule({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [RouterModule]
})
export class CatalogMoviesRoutingModule{

}