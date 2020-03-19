/**
 * Contract of a Serie
 * 
 */
export interface Serie {
    title: string;
    description: string;
    actors: string[];
    price: number;
    youtubeViews: number;
    rating: number;
    releaseDate: string;
    category: string;
    imagePath: string;
    numberOfEpisodes: number;
    trailerPhotos: string[];
    comments: Comment[];
}
