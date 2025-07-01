"use strict";
// Про return

const usdCurr = 28;
const discount = 0.9; // Скидка 10%

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
    // return function () { } // В результате работы функции промоушон будет возвращена 
    // // другая функция которую мы можем вызвать по средсвам перенменной  
}

const res = convert(500, usdCurr); // Вызывает функцию convert с аргументом 500, что возвращает 14000
promotion(res); // Вызывает функцию promotion с аргументом 14000, что выводит 12600 в консоль`


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return

    }
    console.log('Done'); // Эта строка не будет выполнена, так как функция завершится на return
}

test(); // Вызывает функцию test, что выводит 0, 1, 2, 3 в консоль и завершает выполнение функции на return

function doNothing() { };
console.log(doNothing() === undefined);  // Пустая функция, которая ничего не делает
