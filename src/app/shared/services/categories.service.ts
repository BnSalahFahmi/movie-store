import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
    private catégories = [
    'Action',
    'Adventure',
    'Horror',
    'Comedy',
    'Documentary',
    'Drama',
    'Vampire',
    'Historical',
    'Musical',
    'Disney',
    'Mystery',
    'Thriller',
    'Fantasy',
    'Crime',
    'Biography',
    'Romance'
    ];
    
    getCategories(){
        return this.catégories;
    }



    
}