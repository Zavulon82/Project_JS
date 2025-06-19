"use strict";

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Hello, ${user}`); урок №13

console.log("arr" + " - object");
console.log(4 + " - object");

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(++incr);
console.log(--decr);

console.log(5 % 2); // остаток от деления
console.log(2 * 4 == 8); // сравнение
console.log(2 * 4 === '8'); // строгое сравнение

// && логическое И
// || логическое ИЛИ
// ! логическое НЕ

const isChecked = true,
    isClose = false;

console.log(isChecked || isClose); // логическое ИЛИ
// console.log(isChecked && isClose); // логическое И   

console.log(isChecked && !isClose); // логическое И с отрицанием
// console.log(isChecked || !isClose); // логическое ИЛИ с отрицанием