"use strict";

let num = 20;

function showFirstMassage(text) {   //(text, arg, num, fwef) аргументы функции
    // text - строка, arg - любое значение, num - число, fwef - любое значение
    // console.log(text, arg, num, fwef); // Выводит все аргументы функции
    // console.log(arguments); // Выводит все аргументы функции в виде массива
    console.log(text);
    let num = 10;  // Изменяем значение переменной num внутри функции
    console.log(num); // Выводит значение переменной num, которая была изменена внутри функции
}

showFirstMassage("Hello, World!");
console.log(num); // Выводит значение переменной num, которая была объявлена вне функции


// function calc(a, b) {
//     return a + b; // Возвращает сумму двух аргументов
// }

// console.log(calc(3, 4)); // Выводит результат функции calc с аргументами 3 и 4
// console.log(calc(5, 6)); // Выводит результат функции calc с аргументами 5 и 6
// console.log(calc(10, 6)); // Выводит результат функции calc с аргументами 10 и 6

function ret() {
    let num = 50; // Локальная переменная num
    return num; // Возвращает значение локальной переменной num
}

const anotherNum = ret(); // Вызывает функцию ret и сохраняет возвращаемое значение в anotherNum
console.log(anotherNum); // Выводит значение anotherNum, которое равно 50


const logger = function () { // Объявление функции как переменной Это expression function!!
    console.log("Hello, World!"); // Выводит сообщение в консоль    
};

logger(); // Вызывает функцию logger, которая выводит сообщение в консоль

const calc = (a, b) => a + b;        // Объявление стрелочной функции
//Не имеет своего контекста вызова (this), поэтому не подходит для методов объектов встречается в обработчиках событий
// Возвращает сумму двух аргументов a и b

