import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartRootComponent } from './components/cart-root/cart-root.component';
import { CartRoutingModule } from './cart-routing.model';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartService } from './services/cart.service';

@NgModule({
    declarations: [
        CartItemComponent,
        CartListComponent,
        CartRootComponent
    ],
    imports:[
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
        CartService
    ]
})
export class CartModule{

}