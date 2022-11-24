import result from './data.js';
import data from './data.js';

//console.log(data);
//console.log(result[0])

function createrCatalogue(){ 

    if(localStorage.getItem('favorite_movies') !== null){
        console.log("It already exists")

    }else{
        localStorage.setItem('favorite_movies')
    }
}

function search_data(x){
    let favorite_movie_find = data.find(movie => movie.id === x)
    return favorite_movie_find
}

function addmovie(x){

    let favorite_movie_add = data.find(movie => movie.id === x)

    new_movie = {
        movieId: favorite_movie_add.id,
        movieTitle: favorite_movie_add.title
    }

    const favorite_movie = (() => {
        const items = localStorage.getItem('favorite_movies');
        return items === null
            ? []
            : JSON.parse(items);
    })();

    let movies = [];

    for(let i = 0; i< favorite_movie.length; i++){
        movies.push(favorite_movie[i].new_movie)
    }

    localStorage.setItem('favorite_movies', JSON.stringify(movies));

}

function search_storage(x){
    
}

//console.log(createrCatalogue())
//console.log(search_data(436270))
//console.log(createrFavourite(436270))