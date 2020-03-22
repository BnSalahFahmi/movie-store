import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreService } from './services/core.service';
import { CartService } from '../cart/services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AppComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    CoreService,
    CartService
  ]
})
export class CoreModule { 
    static forRoot(): ModuleWithProviders<CoreModule> {
    return {
        ngModule: CoreModule,
        providers: []
    };
}
}
