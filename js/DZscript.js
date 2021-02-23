/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на 
вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = prompt("Сколько фильмов вы посмотрели?" , "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы посмотрели?" , "");
    }
}

start();



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?' , ""),
              b = prompt('На сколько оцените его?' , "");
        if (a != null && b != null && a !='' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log("Вы классический зритель");
    } else if (numberOfFilms >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB); 
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номеров ${i}`);
    }
}

writeYourGenres();