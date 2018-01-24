import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CatalogSeriesRoutingModule } from './catalog-series-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SerieDetailsComponent } from './components/series-item-details/series-item-details.component';
import { SerieItemComponent } from './components/series-item/series-item.component';
import { SeriesRootComponent } from './components/series-root/series-root.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesService } from './services/series.service';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
      SeriesRootComponent, 
      SeriesListComponent, 
      SerieItemComponent, 
      SerieDetailsComponent
      ],
      imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CatalogSeriesRoutingModule,
        SharedModule
      ],
      exports: [
        CatalogSeriesRoutingModule
      ],
      providers: [
        SeriesService
      ]
})                 
export class CatalogSeriesModule {

}