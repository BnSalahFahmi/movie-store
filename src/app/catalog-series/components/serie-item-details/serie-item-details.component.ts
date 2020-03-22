import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../models/Serie.model';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-serie-details',
  template: `
  <div class="example-card" style="margin: 10px">
  <mat-card-content>
    <div class="row">

      <div class="col-lg-10 col-md-10 col-sm-10">
        <p>
          <b>
            {{serie.title}}
          </b>
        </p>
        
        <p><b>Price : </b> {{serie.price}}</p>
        <p><b>Youtube views : </b>{{serie.youtubeViews}}</p>
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
    <button mat-stroked-button color="primary">TRAILER PHOTOS</button>
    <button mat-stroked-button color="primary" (click)="handleAddToCartClick()">ADD TO MY CART</button>
    <button mat-stroked-button routerLink="../../list" style="float: right; margin-right: 25px">RETURN</button>
  </mat-card-actions>
</div>
  `,
  styles: [`
  .example-card {
    padding: 10px;
  }
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

  @Input() serie: Serie;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService, private cartService: CartService) { }

  ngOnInit() {
    const name = this.route.snapshot.params['id'];
    this.serie = this.seriesService.findSerieByName(name);
  }

  handleAddToCartClick() {
    this.cartService.addSerieToCart(this.serie);
  }

}
