'use strict'
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули', '');

        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули', '');
        }
    },
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB.count);
        }
    },
    writeYourGenre: function () {
        let genre;
        for (let i = 1; i <= 3; i++) {
            genre = prompt(`Ваш улюблений жанр під номером ${i}`, '');
            if(genre === '' || genre === null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, index) => console.log(
            `Улюблений жанр №${index + 1} це ${item}`));
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Напишіть один із останніх переглянутих фільмів', ''),
                b = prompt('На скільки оціните його?');
            if (a != null && b != null && a !== '' && b !== '' && a.length <= 50 && b.length <= 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Переглянуто доволі мало фільмів');
        } else if (personalMovieDB.count <= 30) {
            alert('Ви класичний глядач');
        } else if (personalMovieDB.count > 30) {
            alert('Ви кіноман');
        } else {
            alert('Помилка');
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
}

personalMovieDB.start();

personalMovieDB.writeYourGenre();

console.log(personalMovieDB);

personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);