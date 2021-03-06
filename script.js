"use strict";

const personalMoviesDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilm: function() {
        let i=1;
        while(i <= 2) {
    
            const a = prompt('Один из последних просмотренных фильмов?','');
            const b = prompt('На сколько оцените его?','');

            if(a == "" || b == "" || a.lenght > 50 || a == null || b == null) {
                continue;
            }
            personalMoviesDB.movies[a] = b;
            i++;
        }
    },
    detectPersonalLevel: function() {
        if(personalMoviesDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов!");
        } else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log("Вы классический зритель.");
        } else if(personalMoviesDB.count >= 30) {
            console.log("Вы киноман!");
        } else {
            console.log("Произошла ошибка...");
        }
    },
    showMyDB: function() {
        if(personalMoviesDB.privat == false)
        {
           console.log(personalMoviesDB);
        }
   },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++)
        {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            
            if(genre == null || genre == '') {
                console.log('Вы ввели некорректные данные, повторите, пожалуйста, ввод.');
                i--;
            }
            personalMoviesDB.genres[i - 1] = genre; 
        }

        const masGenres = personalMoviesDB.genres;
        masGenres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });

    },
    start: function() {
        let number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (number0Films == '' || number0Films == null || number0Films == isNaN(number0Films)) {
            number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

        personalMoviesDB.count = number0Films;
    },
    toggleVisibleMyDB: function() {
        if(personalMoviesDB.privat === false) {
            personalMoviesDB.privat = true;
        } else if(personalMoviesDB.privat === true) {
            personalMoviesDB.privat = false;
        }
    }
};

personalMoviesDB.start();

personalMoviesDB.rememberMyFilm();

personalMoviesDB.detectPersonalLevel();

//personalMoviesDB.toggleVisibleMyDB();  тру/фолс

personalMoviesDB.showMyDB();

personalMoviesDB.writeYourGenres();


