import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SerieDetailsComponent } from './components/series-item-details/series-item-details.component';
import { SeriesRootComponent } from './components/series-root/series-root.component';



const appRoutes: Routes = [
    {
        path: '', component: SeriesRootComponent,
        children: [
            { path: 'list', component: SeriesListComponent },
            { path: 'series/:id', component: SerieDetailsComponent },
            { path: '', redirectTo: 'list', pathMatch:'full' }
        ]
    }
]


@NgModule({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [RouterModule]
})
export class CatalogSeriesRoutingModule{

}