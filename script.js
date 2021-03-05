const number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    
/*for(let i=1; i<=2; i++){
    const a = prompt('Один из последних просмотренных фильмов?','');
    const b = prompt('На сколько оцените его?','');
    personalMoviesDB.movies[a] = b;
}*/

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

if(personalMoviesDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов!");
} else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Вы классический зритель.");
} else if(personalMoviesDB.count >= 50) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка...");
}

console.log(personalMoviesDB);
