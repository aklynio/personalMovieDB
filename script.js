'use strict';

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        private: false,
        start: function() {
            while (this.count === 0 || this.count == null || this.count == undefined || isNaN(this.count)) {
                this.count = +prompt('Сколько фильмов вы уже посмотрели?');
            }
        },
        rememberMyFilms: function() {
            for (let i = 0; i < 2; i++) {
                const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?').trim();
                if (lastWatchedFilm == '' || lastWatchedFilm === null || lastWatchedFilm.length > 50) {
                    i--;
                    continue;
                }
                const lastWatchedFilmRating = +prompt('На сколько оцените его?');
                this.movies[lastWatchedFilm] = lastWatchedFilmRating;
            }
        },
        detectPersonalLevel: function() {
            if (this.count < 10) {
                alert('Просмотрено довольно мало фильмов');
            } else if (this.count < 30) {
                alert('Вы классический зритель');
            } else if (this.count >= 30) {
                alert('Вы киноман');
            } else {
                alert('Произошла ошибка');
            }
        },
        showMyDB: function() {
            if (!this.private) {
                console.log(this);
            }
        },
        writeYourGenres: function() {
            for (let i = 0; i < 3; i++) {
                this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
                if (this.genres[i] == null || this.genres[i] === '') {
                    i--;
                }
            }
            this.genres.forEach((genre, i) => {
                console.log(`Любимый жанр #${i + 1} - это ${genre}`);
            });
        },
        toggleVisibleMyDB: function() {
            this.private = !this.private;
        }
    };