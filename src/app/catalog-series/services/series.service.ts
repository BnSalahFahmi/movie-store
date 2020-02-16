
import { map } from 'rxjs/operators';
import { EventEmitter, Injectable } from '@angular/core';
import { Serie } from './../models/Serie.model';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../shared/services/common-service.service';;
import { AuthenticationService } from '../../authentication/services/authentication.service';

const url = "https://movies-store-54267.firebaseio.com";

@Injectable()
export class SeriesService {
    private indexOfactorToManipulate: number = 1;
    indexOfManipulatorUpdate = new EventEmitter<number>();
    private series: Serie[];

    constructor(private commonService: CommonService, private http: HttpClient, private authService: AuthenticationService) {
        // keep in cache the last result  
        let token = this.authService.getToken();
        this.http.get<Serie[]>(url + '/series.json?auth=' + token).subscribe(
            (response) => {
                this.series = response;
            }
        )
    }

    getSeries() {
        let token = this.authService.getToken();
        return this.http.get<Serie[]>(url + '/series.json?auth=' + token).pipe(map(response => response));
    }

    setIndexOfSerieToManipulate(index: number) {
        this.indexOfactorToManipulate = index;
        this.indexOfManipulatorUpdate.emit(index);
    }

    getIndexOfMovieToManipulate() {
        return this.indexOfactorToManipulate;
    }

    findSerieByName(name: string) {
        for (let serie of this.series) {
            if (name == serie.title) {
                return serie;
            }
        }
    }

    getSerieRatesStars(serie: Serie) {
        return serie.rating;
    }

    getSerieNonRatesStars(serie: Serie) {
        return 5 - serie.rating;
    }

}