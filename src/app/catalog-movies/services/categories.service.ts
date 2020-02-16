import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
    private catégories = [
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