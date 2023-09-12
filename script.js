'use strict';

let numberOfFilms;

function start() {
    while (numberOfFilms === 0 || numberOfFilms === null || numberOfFilms === undefined || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?');
        if (lastWatchedFilm == '' || lastWatchedFilm === null || lastWatchedFilm.length > 50) {
            i--;
            continue;
        }
        const lastWatchedFilmRating = +prompt('На сколько оцените его?');
        personalMovieDB.movies[lastWatchedFilm] = lastWatchedFilmRating;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(database) {
    if (!database.private) {
        console.log(database);
    }
}

showMyDB(personalMovieDB);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();