import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartRootComponent } from './components/cart-root/cart-root.component';
import { CartContentPageComponent } from './components/cart-content-page/cart-content-page.component';


const appRoutes: Routes = [
    {
        path: '', component: CartRootComponent,
        children: [
            { path: 'list', component: CartContentPageComponent },
            { path: '', redirectTo: 'list', pathMatch: 'full' }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class CartRoutingModule {

}