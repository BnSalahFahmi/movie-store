import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie.model';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-movie-item',
  template: `
  <div class="movie-card">
    <div class="media-card lazy lazzed thumbnail" [style.backgroundImage]="'url('+ movie.imagePath +')'" [routerLink]="['../movies', movie.title]">
        <img width="100%" src="assets/background-transparent-portrait.png">
        <div class="d-flex flex-column justify-content-between media-overlay">
            <div class="media-overlay-header d-flex justify-content-between">
                <strong>{{movie.price}}$</strong><strong>{{movie.releaseDate}}</strong> </div>
            <div class="media-overlay-body d-flex justify-content-center flex-wrap"> <i class="fa fa-play"></i> </div>
            <div class="media-overlay-footer">
                <h5>{{movie.title}}</h5>
                <h5 class="categ">{{movie.category}}</h5>
            </div>
        </div>
    </div>
</div>
  `,
  styles: [`
  .media-card
{
	-o-transition: all 0.2s ease-out;
	-ms-transition: all 0.2s ease-out;
	-moz-transition: all 0.2s ease-out;
	-webkit-transition: all 0.2s ease-out;
	transition: all 0.2s ease-out;
	position:relative;
	background-image: url(http://www.zupmage.eu/i/sIsbSc7Zcn.jpg);
	background-size:cover;
	background-position: center;
	width:200px;
	max-height: 240px;
	min-height: 222px;
  margin:10px;
  cursor: pointer;
  padding: .25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: .25rem;
}
.media-card:hover .media-overlay  {
  opacity: 1 !important;
}
  .media-card *
{
	color:white;
	text-shadow: 0px 0px 5px #000 !important;
}
.media-card:hover
{
    -o-transform: scale(1.05);
	-ms-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    z-index: 10;
}
  .media-overlay
{
  opacity: 0;
	position: absolute;
	height:100%;
	width:100%;
	top:0px;
	left:0px;
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#b3000000',GradientType=1 );
}
.media-overlay.ramadan
{
	opacity:1 !important;
}
.media-overlay-header
{
	width:100%;
	padding: 5px;
}
.media-overlay-footer
{
	padding:5px;
}
.media-overlay-footer h5 ,.media-overlay-footer h6
{
	text-align:center;
}
.categ
{
	display: block;
	font-size:14px;
	font-weight:300;
	text-align:center;
}
.media-overlay-body > i{
  font-size: 2.6em;
  color: white !important;
  text-shadow: 0px 0px 20px white !important;
}

.media-overlay-body .trailer
{
	width:100%;
	text-align: center;
	margin-top: 60px;
}

.media-overlay-body .trailer *{
	color:#ff7e00 !important;
	font-size: 1em;
	margin: 0 5px;
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
