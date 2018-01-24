import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Serie } from '../../models/Serie.model';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-list',
  template: `
  <div class="">
    <div class="col-lg-12 col-md-12 col-sm-12" style="display: flex !important;margin-top: 19px;
    flex-wrap: wrap;">
        <app-series-item *ngFor="let serie of series" [serie]="serie"></app-series-item>
    </div>
  </div> 
  <mat-progress-spinner *ngIf="loading" class="spinner" color="primary" mode="indeterminate" value="50"></mat-progress-spinner>
  `,
  styles: ['']
})
export class SeriesListComponent implements OnInit {

  series : Serie[];
  loading: boolean = true;
  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.seriesService.getSeries().subscribe(
      (data) => {
        this.loading = false;
        this.series = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }


}

