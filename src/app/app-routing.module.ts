import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoComponent } from './core/components/logo/logo.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'catalog-movies', pathMatch:'full'},
    {path: 'catalog-movies', loadChildren:'app/catalog-movies/catalog-movies.module#CatalogMoviesModule'},
    {path: 'catalog-series', loadChildren:'app/catalog-series/catalog-series.module#CatalogSeriesModule'},
    {path: 'cart', loadChildren:'app/cart/cart.module#CartModule'}
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}