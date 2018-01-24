import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesRootComponent } from './components/movies-root/movies-root.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesItemDetailsComponent } from './components/movies-item-details/movies-item-details.component';


const appRoutes: Routes = [
    {
        path: '', component: MoviesRootComponent,
        children: [
            { path: 'list', component: MoviesListComponent },
            { path: 'movies/:id', component: MoviesItemDetailsComponent },
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