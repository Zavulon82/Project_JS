"use strict";

const obj = new Object(); //Можно использовать new Object() для создания объекта.Но чаще всего используется литерал объекта.

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {//Метод объекта options который мы сами можем создавать
        console.log("Test");
    }
};

options.makeTest(); //Вызывает метод makeTest объекта options

const { border, bg } = options.colors; //Деструктуризация объекта colors, извлекает свойства border и bg
console.log(border); //Выводит значение свойства border

// console.log(Object.keys(options)); //Выводит массив ключей объекта options
// console.log(Object.keys(options).length); //Выводит количество свойств в объекте options

// console.log(options.name); //Выводит значение свойства name объекта options
// //достучатся до вложенного свойства можно так:через точку или через квадратные скобки
// console.log(options["colors"]["border"]); //Выводит значение свойства border вложенного объекта colors
// console.log(options.colors.border); //Выводит значение свойства border вложенного объекта colors

// delete options.name; //Удаляет свойство name из объекта options

// console.log(options);
// let counter = 0; //Счетчик для перебора свойств объекта
// for (let key in options) { //Перебирает все свойства объекта options
//     if (typeof options[key] === "object") { //Проверяет, является ли значение свойства объектом
//         for (let i in options[key]) { //Если значение свойства является объектом, перебирает его свойства
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);// Выводит значение свойства вложенного объекта
//             counter++; //Увеличивает счетчик для каждого свойства вложенного объекта
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);// Выводит значение свойства объекта options
//         counter++; //Увеличивает счетчик для каждого свойства
//     }
// }// Перебирает все свойства объекта options и выводит их значения включая вложенные объекты

// console.log(`Всего свойств в объекте: ${counter}`); //Выводит общее количество свойств в объекте options

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`); //Выводит значение каждого свойства объекта options без проверки на вложенность
// }