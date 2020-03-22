import { Component, Input } from '@angular/core';
import { Serie } from 'src/app/catalog-series/models/Serie.model';
import { Movie } from 'src/app/catalog-movies/models/Movie.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: '[app-cart-row]',
    template: `
     <td class="align-middle"><img src="{{row.imagePath}}"/></td>
     <td class="align-middle"><a href="#">{{row.title}}</a></td>
     <td class="align-middle">{{row.price}} €</td>
     <td class="align-middle">
     <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2" (click)="handleRemoveRowClick(row)">
        <i class="far fa-trash-alt mt-0"></i>
     </button>
     </td>
  `,
    styles: [`
    img {
        width: 80px;
        height: 100px;
    }
    input {
        width: 100px;
    }

    i {
        cursor: pointer;
    }

    a {
        color: #1a237e;
        text-decoration: none;
    }

    a:hover {
        color: #1a237e;
        text-decoration: none !important;
    }

    td {
        width: 25%;
    }
    `]
})
export class CartRowComponent {

    @Input() row: Movie | Serie;

    constructor(private cartService: CartService) {

    }

    handleRemoveRowClick(row) {
        this.cartService.removeRow(row);
    }
}