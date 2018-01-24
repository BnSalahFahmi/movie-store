import { EventEmitter } from '@angular/core';
import { Movie } from './../models/Movie.model';

export class CartService {
    private indexOfactorToManipulate: number = 1;
    indexOfManipulatorUpdate = new EventEmitter<number>();
    private Movies: Movie[] = [];
    getMovies(){
        return this.Movies;
    }

    setIndexOfMovieToManipulate(index: number){
        this.indexOfactorToManipulate = index;
        this.indexOfManipulatorUpdate.emit(index);
    }

    getIndexOfMovieToManipulate(){
        return this.indexOfactorToManipulate;
    }

    findMovieByName(name : string){
        for(let movie of this.Movies){
            if(name == movie.title){
                return movie;
            }
        }
    }

    
}