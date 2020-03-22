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
    <div class="row col-lg-12">
      <div class="col-lg-6 col-md-6 col-sm-6 align-center">
        <img mat-card-image class="card-image img-responsive img-thumbnail" src="{{serie.imagePath}}" alt="Photo of a Shiba Inu">
      </div>
      <div class="col-lg-6 col-md-6 col-sm-56">
      <div class="align-center serie-info">
      <span class="serie-title">{{serie.title}}</span>
      </div>
      <p><b> By : </b>
        <i *ngFor="let actor of serie.actors">
          {{actor}} - 
        </i>
      </p>
      <p><b>Price : </b> {{serie.price}}</p>
      <p><b>Youtube views : </b>{{serie.youtubeViews}}</p>
      <p>
        {{serie.description}}
      </p>
      <div class="align-center card-actions">
          <button mat-raised-button color="primary" (click)="handleAddToCartClick()"><i class="fa fa-cart-plus"></i> ADD TO CART</button>
      </div>
      </div>
    </div>
  </mat-card-content>
</div>
  `,
  styles: [`
  .example-card {
    padding: 10px;
  }
  .align-center {
    text-align: center;
  }
  .serie-info {
    margin-bottom: 20px;
  }
  .card-image{
    height: 300px !important;
    width: 250px !important;
  }
  .serie-title {
    font-size: 30px;
    font-weight: 600;
    margin-top: 15px;
  }
  .card-actions {
    margin-top: 50px;
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
