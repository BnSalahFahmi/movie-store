import { EventEmitter, Injectable } from '@angular/core';
import { Serie } from './../models/Serie.model';
import { Http } from '@angular/http';
import { CommonService } from '../../shared/services/common-service.service';
import 'rxjs/Rx';

const url = "https://movies-store-54267.firebaseio.com";

@Injectable()
export class SeriesService {
    private indexOfactorToManipulate: number = 1;
    indexOfManipulatorUpdate = new EventEmitter<number>();
    private series: Serie[];

    constructor(private commonService: CommonService, private http: Http) {
        // keep in cache the last result  
        this.http.get(url + '/series.json').subscribe(
            (response) => {
                this.series = response.json();
            }
        )
    }

    getSeries(){
        return this.http.get(url + '/series.json').map(response => response.json());
    }

    setIndexOfSerieToManipulate(index: number){
        this.indexOfactorToManipulate = index;
        this.indexOfManipulatorUpdate.emit(index);
    }

    getIndexOfMovieToManipulate(){
        return this.indexOfactorToManipulate;
    }

    findSerieByName(name : string){
        for(let serie of this.series){
            if(name == serie.title){
                return serie;
            }
        }
    }

    getSerieRatesStars(serie: Serie){
        return serie.rating;
    }

    getSerieNonRatesStars(serie: Serie){
        return 5 - serie.rating;
    }

}