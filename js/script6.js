"use strict";

//Условия

if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("ERROR!");
}

//Вложенность условий

const num = 50;

if (num < 49) {
    console.log("ERROR!");
} else if (num > 100) {
    console.log("Too much!");
} else {
    console.log("Ok!");
}
//Тернарный оператор содержит 3 оператора 
(num === 50) ? console.log("Ok!") : console.log("ERROR!");

//Бинарный оператор +
4 + 4;
//Унарный оператор - это оператор, который работает с одним операндом
+4;


//Проверка на равенство
//Конструкция switch всегда идёт на точное сравнение, поэтому в ней не может быть операторов сравнения < > =

const nit = 50;


switch (nit) {
    case 49:
        console.log("Неверно!");
        break;
    case 100:
        console.log("Неверно!");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Не в этот раз!");
        break;
}
//также можно работать со строками