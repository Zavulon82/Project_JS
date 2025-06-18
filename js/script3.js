// const storeName = 'My awesome store';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Alex', 'John', 'Sam'],
//     products: {
//         'soap': 20,
//         'water': 5
//     },
//     open: true
// }  ответ на задание номер 2
"use strict";

// alert("Hello, world!");

// const result = confirm("Are you sure you want to continue?");
// console.log(result);

// const answer = prompt("Are you 18 or older?", "18");
// console.log(typeof (answer));

const answers = [];

answers[0] = prompt("What is your name?", "");
answers[1] = prompt("What is your age?", "");
answers[2] = prompt("What is your favorite color?", "");

// document.write(answers);

console.log(typeof (answers));
console.log(typeof (null)); // null is an object in JavaScript, this is a known quirk

