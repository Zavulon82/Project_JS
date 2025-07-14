"use strict";

const str = "teSt";
// const arr = [1, 2, 3, 4, 5];

// console.log(arr.length) // колличество элементов в массиве = 5(это свойство массива length)

// console.log(str.length); // колличество символов в строке = 4(это свойство строки length)
// console.log(str[2]); // доступ к символу строки по индексу = 's' (индексация начинается с 0 поэтому 
// str[2] это третий символ строки буква 's')
// console.log(str.toUpperCase()); // метод toUpperCase() возвращает строку в верхнем регистре = 'TEST'
console.log(str.toLowerCase()); // метод toLowerCase() возвращает строку в нижнем регистре = 'test'
console.log(str);


const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // метод indexOf() возвращает индекс первого вхождения 
// подстроки 'fruit' в строке 'Some fruit' = 5
const logg = "Hello world";

// console.log(logg.slice(6, 11)); // метод slice() возвращает часть строки с 6 по 11 индекс
// (не включая 11) = 'world'
//console.log(logg.slice(6)); // если второй аргумент не указан, то метод slice()
// вернет часть строки с 6 индекса до конца = 'world'
// console.log(logg.slice(-5, -1)); // если первый аргумент отрицательный, то метод slice()
// начнет отсчет с конца строки, в данном случае вернет часть строки с 5


// console.log(logg.substring(6, 11)); // метод substring() работает аналогично методу slice(), но не поддерживает отрицательные индексы
// вернет часть строки с 6 по 11 индекс = 'world'

console.log(logg.substr(6, 5));// метод substr() работает аналогично методу slice(), но принимает начальный индекс и количество символов
// вернет часть строки с 6.index и 5 символов = 'world' но устарел!!!




