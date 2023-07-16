'use strict'

/* Задание на урок:

1) Першу частину завдання повторити по уроку

2) Створити функцію showMyDB, яка буде перевіряти властивість privat. Якщо стоїть в позиції false -
виводить в консоль головний об'єкт програми.

3) Створити функцію writeYourGenres в якій користувач буде 3 раза відповідати на питання
"Ваш улюблений жанр під номером ${номер по порядку}". Кожна відповідь буде записуватись в масив даних
genres
*/

let numberOfFilms;

function showMyDb(hidden) {
    if (!hidden) {
        console.log(numberOfFilms);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`, '');
     }
}
function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули', '');

    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Напишіть один із останніх переглянутих фільмів', ''),
            b = prompt('На скільки оціните його?');
        if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Переглянуто доволі мало фільмів');
    } else if (personalMovieDB.count <= 30) {
        alert('Ви класичний глядач');
    } else if (personalMovieDB.count > 30) {
        alert('Ви кіноман');
    } else {
        alert('Помилка');
    }
}

detectPersonalLevel();
showMyDb(personalMovieDB.privat);
writeYourGenres();

console.log(personalMovieDB);