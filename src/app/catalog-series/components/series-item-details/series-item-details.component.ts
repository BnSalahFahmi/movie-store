import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../models/Serie.model';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-item-details',
  template: `
  <mat-card class="example-card" style="margin: 10px">
  <mat-card-content>
    <div class="row">

      <div class="col-lg-10 col-md-10 col-sm-10">
        <p>
          <b>
            {{serie.title}}
          </b>
        </p>
        <p> <b>By : </b> {{serie.actors[0].lastname}} {{serie.actors[0].firstname}} </p>
        <p><b>Price : </b> {{serie.price}}</p>
        <p><b>Youtube views : </b>{{serie.youtubeViews}}</p>
        <p>{{serie.likes}}</p>
        <p>{{serie.dislikes}}</p>
        <p>
          {{serie.description}}
        </p>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2">
        <img mat-card-image class="card-image img-responsive img-thumbnail" src="{{serie.imagePath}}" alt="Photo of a Shiba Inu">
      </div>
    </div>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button mat-raised-button color="primary" routerLink="../../list">TRAILER PHOTOS</button>
    <button mat-button mat-raised-button>ADD TO CHART</button>
    <button mat-button mat-raised-button routerLink="../../list" style="float: right; margin-right: 25px">RETURN</button>
  </mat-card-actions>
</mat-card>
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
export class SerieDetailsComponent implements OnInit {

  @Input('serie') serie: Serie;
  constructor(private route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit() {
    let name = this.route.snapshot.params['id'];
    this.serie = this.seriesService.findSerieByName(name);
  }

}
