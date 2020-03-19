/**
 * Contract of a Movie
 * 
 */
export interface Movie {
    title: string;
    description: string;
    actors: string[];
    price: number;
    youtubeViews: number;
    rating: number;
    imagePath: string;
    category: string;
    trailerPhotos: string[];
    runtime: string;
    comments: Comment[];
}
