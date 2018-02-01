import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/Movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  template: `
  <div class="body-container">
  <mat-card class="example-card" style="margin: 10px 10px 10px 10px;">
    <mat-card-content>
      <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-10">
          <p>
            <b>
              {{movie.title}}
            </b>
          </p>
          <b>By : </b> 
          <i *ngFor="let actor of movie.actors">
          {{actor}} 
          </i>
          <p><b>Price : </b> {{movie.price}}</p>
          <p><b>Youtube views : </b>{{movie.youtubeViews}}</p>
          <p>{{movie.likes}}</p>
          <p>{{movie.dislikes}}</p>
          <p>
            {{movie.description}}
          </p>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2">
          <img mat-card-image class="card-image img-responsive img-thumbnail" src="{{movie.imagePath}}" alt="Photo of a Shiba Inu">
        </div>
      </div>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button mat-raised-button color="primary" routerLink="../../list">TRAILER PHOTOS</button>
      <button mat-button mat-raised-button>ADD TO CHART</button>
      <button mat-button mat-raised-button routerLink="../../list" style="float: right; margin-right: 25px">RETURN</button>
    </mat-card-actions>
  </mat-card>
</div>
  `,
  styles: [`
  .card-image{
    height: 150px !important;
    width: 120px !important;
    position: relative;
    margin-top: -6px !important;
    margin: 0px 0px 0px 2px !important;
    float: right;
}
  `]
})
export class MoviesItemDetailsComponent implements OnInit {

  movie: Movie;
  constructor(private route: ActivatedRoute, private catalogService: MoviesService) { }

  ngOnInit() {
    let name = this.route.snapshot.params['id'];
    this.movie = this.catalogService.findMovieByName(name);
  }

}
