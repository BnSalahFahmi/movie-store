
import { map } from 'rxjs/operators';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './../models/Movie.model';
import { AuthenticationService } from '../../authentication/services/authentication.service';

const url = "https://movies-store-54267.firebaseio.com";

@Injectable()
export class MoviesService {

    private indexOfactorToManipulate: number = 1;
    indexOfManipulatorUpdate = new EventEmitter<number>();
    private movies: Movie[];

    constructor(private http: HttpClient, private authService: AuthenticationService) {
        // keep in cache the last result  
        let token = this.authService.getToken();
        this.http.get<Movie[]>(url + '/movies.json?auth=' + token).subscribe(
            (response) => {
                this.movies = response;
            }
        )
    }

    fetchMovies() {
        let token = this.authService.getToken();
        return this.http.get<Movie[]>(url + '/movies.json?auth=' + token).pipe(map(response => response));
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

    getMoviesByCateg(category: string) {
        if ('All' == category) {
            return this.movies;
        }
        let movies: Movie[] = [];
        for (let movie of this.movies) {
            if (movie.category.indexOf(category) != -1) {
                movies.push(movie);
            }
        }
        return movies;
    }

    getMoviesByName(query: string) {
        let movies: Movie[] = [];
        for (let movie of this.movies) {
            if (movie.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) != -1) {
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
            if (categ == movie.category) {
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