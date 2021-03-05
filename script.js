let number0Films;

function start() {
    number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (number0Films == '' || number0Films == null || number0Films == isNaN(number0Films)) {
        number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilm(){
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
}

function detectPersonalLevel() {
    if(personalMoviesDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов!");
    } else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log("Вы классический зритель.");
    } else if(personalMoviesDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка...");
    }
}

function showMyDB() {
     if(personalMoviesDB.privat == false)
     {
        console.log(personalMoviesDB);
     }
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++)
    {
            personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

start();

const personalMoviesDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilm();

detectPersonalLevel();

showMyDB();

writeYourGenres();

console.log(personalMoviesDB);


 