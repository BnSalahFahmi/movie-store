import { OnInit, Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Serie } from 'src/app/catalog-series/models/Serie.model';
import { Movie } from 'src/app/catalog-movies/models/Movie.model';

@Component({
    selector: 'app-cart-content-page',
    template: `
        <div class="cart-container" *ngIf="rows.length != 0 ; else empty">
        <div class="card card-cascade narrower">
            <div
                class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
                <div>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-th-large mt-0"></i>
                    </button>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-columns mt-0"></i>
                    </button>
                </div>

                <span *ngIf="rows.length == 1" class="white-text mx-3">Your cart ({{rows.length}} item)</span>
                <span *ngIf="rows.length > 1" class="white-text mx-3">Your cart ({{rows.length}} items)</span>

                <div>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2" (click)="handleRemoveAllRowClick()">
                        <i class="far fa-trash-alt mt-0"></i>
                    </button>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-info-circle mt-0"></i>
                    </button>
                </div>
            </div>
            <div class="px-4">
                <div class="table-wrapper">
                    <table class="table table-hover mb-0">
                        <tbody>
                            <tr *ngFor="let row of rows" [row]="row" app-cart-row>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <ng-template #empty>
        <app-empty-cart></app-empty-cart>
    </ng-template>
    `,
    styles: [
        `
    .cart-container {
        padding: 30px;
        text-align:center;
    }

    .cart-info {
        margin-bottom: 10px;
    }

    h3 {
        font-size: 18px;
        font-weight: 600;
        font-family: Roboto,Noto,sans-serif;
    }
    `
    ]
})
export class CartContentPageComponent implements OnInit {

    rows: (Movie | Serie)[];

    constructor(private cartService: CartService) {
        this.cartService.rowsEvent.subscribe(
            data => this.rows = data
        );
    }

    ngOnInit() {
        this.rows = this.cartService.getRows();
    }

    handleRemoveAllRowClick() {
        this.cartService.removeAllRows();
    }
}