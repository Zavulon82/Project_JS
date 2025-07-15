// "use strict";

// const lines = 5;
// let result = '';


// for (let i = 0; i <= lines; i++) {

//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

// //      *
// //     ***
// //    *****
// //   *******
// //  *********
// // ***********  ответ 

// ДЗ №6
// 1. Написать функцию, которая принимает имя и возвращает строку "Привет, {name}!".
// 2. Вызвать эту функцию с именем "John" и вывести результат в консоль.
// 3. Использовать шаблонные строки для формирования строки приветствия.
// function sayHello() {
//     function sayHello(name) {
//         return 'Привет, ${name}!';
//     }

//     sayHello('John');
// }

// function returnNeighboringNumbers() {
//     // 1. Написать функцию, которая принимает число и возвращает массив из трех чисел: предыдущее, текущее и следующее.
// }// 2. Вызвать эту функцию с числом 5 и вывести результат в консоль.


//     function returnNeighboringNumbers(num) {
//         return [num - 1, num, num + 1];
//     }

//     returnNeighboringNumbers(5);



function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;

        }
    }

    return str;
}

getMathResult(10, 5);

console.log(getMathResult(10, 5)); // "10---20---30---40---50"