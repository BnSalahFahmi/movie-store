import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieListComponent } from './components/serie-list/serie-list.component';
import { SerieDetailsComponent } from './components/serie-item-details/serie-item-details.component';
import { SerieRootComponent } from './components/serie-root/serie-root.component';



const appRoutes: Routes = [
    {
        path: '', component: SerieRootComponent,
        children: [
            { path: 'list', component: SerieListComponent },
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