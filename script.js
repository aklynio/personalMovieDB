'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };

for (let i = 0; i < 2; i++) {
    const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?');
    if (lastWatchedFilm == '' || lastWatchedFilm === null || lastWatchedFilm.length > 50) {
        i--;
        continue;
    }
    const lastWatchedFilmRating = +prompt('На сколько оцените его?');
    personalMovieDB.movies[lastWatchedFilm] = lastWatchedFilmRating;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);