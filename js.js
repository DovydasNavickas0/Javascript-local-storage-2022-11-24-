import result from './data.js';
import data from './data.js';

//console.log(data);
//console.log(result[0])

function checkCatalogue(){ 

    if(localStorage.getItem('favorite_movies') !== null){
        console.log("It already exists")

    }else{
        console.log("it doesn't exist")
        return
    }

    console.log("createrCatalogue done")
}

function search_data(x){
    let favorite_movie_find = data.find(movie => movie.id === x)
    return favorite_movie_find
}

function addmovie(x){ //doesn't check if movie has already been added

    let favorite_movie_add = search_data(x)

    //console.log(search_data(x))

    let new_movie = {
        "movieId": favorite_movie_add.id,
        "movieTitle": favorite_movie_add.title
    }

    let movie_id = favorite_movie_add.id;

    let ID = x; 

//    console.log(movie_id)
//    console.log(new_movie)

    const movies = (() => {
        const items = localStorage.getItem('favorite_movies');
        return items === null
            ? []
            : JSON.parse(items);
    })();

    let IDs = [];

    for(let i = 0; i < movies.length; i++){
        IDs.push(movies[i].movie_id);
    }

//    console.log(IDs)
    if(IDs.includes(ID.value)){
        alert("Preke jau yra");
    }else{
//        console.log("nera")
        movies.push(new_movie);
    }

    localStorage.setItem('favorite_movies', JSON.stringify(movies));

    console.log("addmovie done")
}

function search_storage(){
    
    let found_movie = JSON.parse(localStorage.getItem('favorite_movies'));

//    console.log(found_movie)

    let id_numbers = found_movie.map(obj => parseInt(obj.movieId))

//    console.log(id_numbers)

    for(let i=0; i<id_numbers.length; i++){
        let movie_print = data.find(movie => movie.id === id_numbers[i])
        console.log(movie_print)
    }

}

function delete_movie(x){

    let found_movie = JSON.parse(localStorage.getItem('favorite_movies'));

//    console.log(found_movie)

    let target = found_movie.findIndex(found_movie => found_movie.movieId === x)

    if (target > -1) {
        found_movie.splice(target, 1); 
    }

//    console.log(found_movie)

    localStorage.setItem('favorite_movies', JSON.stringify(found_movie))

    console.log('movie deleted')

}

//checkCatalogue()
//console.log(search_data(436270))
//addmovie(436270)
//addmovie(829280)
//addmovie(760161)
//search_storage();
//delete_movie(436270);

