"use strict"

const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i=0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов", ""),
//           b = prompt("На сколько оцениваете?","");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b; 
//         console.log('done!');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
let i = 0;

// while (i < 4) {
//     const a = prompt("Один из последних просмотренных фильмов", ""),
//           b = prompt("На сколько оцениваете?","");
//     i++;
// }

do {
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("На сколько оцениваете?","");
    i++;
} while (i < 4);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB);