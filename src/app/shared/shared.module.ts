import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './ui/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [PageNotFoundComponent, ModalComponent],
      imports: [
        AngularMaterialModule
      ],
      exports: [
        AngularMaterialModule
      ],
      providers: []
})                 
export class SharedModule {

}