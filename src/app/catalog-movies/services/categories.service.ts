import { EventEmitter } from '@angular/core';
import { Movie } from './../models/Movie.model';

export class CategoriesService {
    private catégories = [
    'All',
    'Action',
    'Aventures',
    'Horror',
    'Comédie',
    'Documentaire',
    'Drama',
    'Vampire',
    'Historique',
    'Musical',
    'Disney',
    ];
    
    getCategories(){
        return this.catégories;
    }



    
}