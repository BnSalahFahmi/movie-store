import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie.model';


@Component({
  selector: 'app-cart-item',
  template: `
  <mat-card class="example-card" style="margin: 10px">
  <mat-card-content>
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3">
        <img mat-card-image class="mat-card-image img-thumbnail" src="{{movie.imagePath}}" alt="Photo of a Shiba Inu">
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9">
        <div class="movie-header">
            <b>
                {{movie.title}}
            </b>
            <button class="btn btn-primary">X</button>
        </div>   
        <p>
            By {{movie.actors}}
        </p> 
        <p>
            {{movie.description}}
        </p>
        <p>
          {{movie.description}}
        </p>
      </div>
    </div>
  </mat-card-content>
</mat-card>
  `,
  styles: [`
  mat-card{
    margin: 60px;
  }
  
  .example-header-image {
    background-image: url('https://cobbhabitatfamilies.files.wordpress.com/2010/02/books.png');
    background-size: cover;
  }
  .mat-card-actions{
      padding: 0px 0px 5px 0px !important;
      text-align: center;
  }
  .mat-card-image{
    height: 150px;
    width: 120px !important;
    margin: 8px 0px 10px 22px !important;
    box-shadow: 0 12px 20px -10px #263238c4, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0);
  }
  .movie-header .btn{
    float: right;
    border-radius: 50%;
    padding: 0px 5px;
    background-color: white;
    border-color: #00008f;
    color: #00008f;
  }
  .movie-header .btn:hover{
    background-color: #00008f;
    border-color: #00008f;
    color: white;
  }
  `]
})
export class CartItemComponent implements OnInit {

  @Input('movie') movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
