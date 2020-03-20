import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
    private catégories = [
    'Action',
    'adventures',
    'Horror',
    'Comedy',
    'Documentary',
    'Drama',
    'Vampire',
    'Historical',
    'Musical',
    'Disney',
    ];
    
    getCategories(){
        return this.catégories;
    }



    
}