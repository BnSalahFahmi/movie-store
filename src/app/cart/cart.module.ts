import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.model';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartContentPageComponent } from './components/cart-content-page/cart-content-page.component';
import { CartRowComponent } from './components/cart-row/cart-row.component';
import { EmptyCartComponent } from './components/cart-empty.component';
import { CartRootComponent } from './components/cart-root/cart-root.component';

@NgModule({
    declarations: [
        CartRootComponent,
        CartContentPageComponent,
        CartRowComponent,
        EmptyCartComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CartRoutingModule,
        SharedModule
    ],
    exports: [
        CartRoutingModule
    ],
    providers: [
       
    ]
})
export class CartModule {

}