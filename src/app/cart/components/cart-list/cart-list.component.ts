import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Movie } from '../../models/Movie.model';

@Component({
  selector: 'app-cart-list',
  template: `
  <div class="" *ngIf="movies.length != 0 ; else empty">
    <app-cart-item *ngFor="let movie of movies" [movie]="movie"></app-cart-item>
  </div>
  <ng-template #empty>
    <img class="empty-card" src="./../../../assets/empty-card.png" alt="empty card">
  </ng-template>
  `,
  styles: [`
  .empty-card{
    left: 35%;
    right: 25%;
    position: absolute;
    top: 30%;
  }
  `]
})
export class CartListComponent implements OnInit {

  movies: Movie[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.movies = this.cartService.getMovies();
  }

}
