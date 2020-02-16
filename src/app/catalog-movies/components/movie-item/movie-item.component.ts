import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie.model';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-movie-item',
  template: `
  <div class="movie-card">
    <img class="movie img-thumbnail" src="{{movie.imagePath}}" alt="Photo of movie" [routerLink]="['../movies', movie.title]"/>
    <span class="movie-title">{{movie.title}}</span>
  </div>
  `,
  styles: [`
  .movie-card {
    text-align: center;
    width: 200px;
    height: 220px;
  } 
  .movie {
    width: 170px;
    min-width: 60px;
    height: 174px;
  }
  .movie:hover {
    cursor: pointer;
    opacity: .5;
  }
  .movie-title {
    color: #263238;
    font-size: 14px;
    font-weight: 600;
    display: block;
    margin-top: 10px;
  }
  `]
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  rateStars: string[] = [];
  nonrateStars: string[] = [];
  constructor(private catalogService: MoviesService) { }

  ngOnInit() {
    for (let i = 1; i <= this.getMovieRatesStars(); i++) {
      this.rateStars.push('star_rate');
    }
    for (let i = 1; i <= 5 - this.getMovieRatesStars(); i++) {
      this.nonrateStars.push('star_rate');
    }
  }

  getMovieRatesStars() {
    return this.catalogService.getMovieRatesStars(this.movie);
  }

  getMovieNonRatesStars() {
    return this.catalogService.getMovieNonRatesStars(this.movie);
  }

}
