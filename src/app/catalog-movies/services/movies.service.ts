import { EventEmitter, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Movie } from './../models/Movie.model';
import { CommonService } from '../../shared/services/common-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const url = "https://movies-store-54267.firebaseio.com";

@Injectable()
export class MoviesService {

    private indexOfactorToManipulate: number = 1;
    indexOfManipulatorUpdate = new EventEmitter<number>();
    private movies: Movie[];

    constructor(private commonService: CommonService, private http: Http) {
        // keep in cache the last result  
        this.http.get(url + '/movies.json').subscribe(
            (response) => {
                this.movies = response.json();
            }
        )
    }

    fetchMovies() {
        return this.http.get(url + '/movies.json').map(response => response.json());
    }

    setIndexOfMovieToManipulate(index: number) {
        this.indexOfactorToManipulate = index;
        this.indexOfManipulatorUpdate.emit(index);
    }

    getIndexOfMovieToManipulate() {
        return this.indexOfactorToManipulate;
    }

    findMovieByName(name: string) {
        for (let movie of this.movies) {
            if (name == movie.title) {
                return movie;
            }
        }
    }

    getFilmsByCateg(categorie: string) {
        if ('All' == categorie) {
            return this.movies;
        }
        let movies: Movie[] = [];
        for (let movie of this.movies) {
            if (movie.categorie == categorie) {
                movies.push(movie);
            }
        }
        return movies;
    }

    getNumberByCateg(categ: string) {
        if (categ == "All") {
            return this.movies.length;
        }
        let number = 0;
        for (let movie of this.movies) {
            if (categ == movie.categorie) {
                number = number + 1;
            }
        }
        return number;
    }

    getMovieRatesStars(movie: Movie) {
        return movie.rating;
    }

    getMovieNonRatesStars(movie: Movie) {
        return 5 - movie.rating;
    }

}