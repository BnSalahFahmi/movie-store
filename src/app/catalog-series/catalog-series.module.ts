import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CatalogSeriesRoutingModule } from './catalog-series-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SerieDetailsComponent } from './components/serie-item-details/serie-item-details.component';
import { SerieItemComponent } from './components/serie-item/serie-item.component';
import { SerieRootComponent } from './components/serie-root/serie-root.component';
import { SerieListComponent } from './components/serie-list/serie-list.component';
import { SeriesService } from './services/series.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      SerieRootComponent,
      SerieListComponent,
      SerieItemComponent,
      SerieDetailsComponent
      ],
      imports: [
        HttpClientModule,
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