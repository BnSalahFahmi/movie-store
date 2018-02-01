import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoComponent } from './core/components/logo/logo.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'signin', pathMatch:'full'},
    {path: 'catalog-movies', loadChildren:'app/catalog-movies/catalog-movies.module#CatalogMoviesModule'},
    {path: 'catalog-series', loadChildren:'app/catalog-series/catalog-series.module#CatalogSeriesModule'},
    {path: 'cart', loadChildren:'app/cart/cart.module#CartModule'},
    {path: 'signin', loadChildren:'app/authentication/auth.module#AuthenticationModule'},
    // Catch any other routes and redirect them to pageNOtFound component
    {path: 'not-found', component: PageNotFoundComponent},
    {path:'**', redirectTo:'not-found'}

]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}