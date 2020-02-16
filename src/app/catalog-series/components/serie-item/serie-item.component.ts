import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../models/Serie.model';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-serie-item',
  template: `
  <div class="serie-card">
    <img class="serie img-thumbnail" src="{{serie.imagePath}}" alt="Photo of movie" [routerLink]="['../series', serie.title]"/>
    <span class="serie-title">{{serie.title}}</span>
  </div>
  `,
  styles: [`
  .serie-card {
    text-align: center;
    width: 200px;
    height: 220px;
  } 
  .serie {
    width: 170px;
    min-width: 60px;
    height: 174px;
  }
  .serie:hover {
    cursor: pointer;
    opacity: .5;
  }
  .serie-title {
    color: #263238;
    font-size: 14px;
    font-weight: 600;
    display: block;
    margin-top: 10px;
  }
  `]
})
export class SerieItemComponent implements OnInit {

  @Input() serie: Serie;
  rateStars: string[] = [];
  nonrateStars: string[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    for (let i = 1; i <= this.getMovieRatesStars(); i++) {
      this.rateStars.push('star_rate');
    }
    for (let i = 1; i <= 5 - this.getMovieRatesStars(); i++) {
      this.nonrateStars.push('star_rate');
    }
  }

  getMovieRatesStars() {
    return this.seriesService.getSerieRatesStars(this.serie);
  }

  getMovieNonRatesStars() {
    return this.seriesService.getSerieNonRatesStars(this.serie);
  }
}
