import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './core/components/app.component';
import { SharedModule } from './shared/shared.module';
import { CatalogMoviesModule } from './catalog-movies/catalog-movies.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { CommonService } from './shared/services/common-service.service';
import { Http } from '@angular/http';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule

  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
