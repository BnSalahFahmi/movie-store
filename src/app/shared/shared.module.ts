import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './ui/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModalComponent } from './components/modal/modal.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [PageNotFoundComponent, ModalComponent, FilterPipe],
      imports: [
        AngularMaterialModule
      ],
      exports: [
        AngularMaterialModule,
        FilterPipe
      ],
      providers: []
})                 
export class SharedModule {

}