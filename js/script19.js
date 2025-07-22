"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;// передаёт ссылку на весь объект
// copy.a = 10; // модифицирует не копию а исходный объект

// console.log(copy); // { a: 10, b: 1 }
// console.log(obj); // { a: 10, b: 1 }

function copy(mainObj) { // функция для создания поверхностной копии объекта
    // создаём новый объект и копируем в него свойства из mainObj
    let objCopy = {};

    let key;// используем let для объявления переменной key
    // перебираем свойства mainObj и копируем их в objCopy
    for (key in mainObj) {
        objCopy[key] = mainObj[key];// копируем значение свойства
    }

    return objCopy;// возвращаем новый объект
}

const numbers = {// исходный объект
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);// создаём поверхностную копию объекта numbers
// // теперь newNumbers - это новый объект, который содержит копии свойств из numbers
// // изменения в newNumbers не повлияют на numbers

// newNumbers.a = 10;// изменяем свойство a в новом объекте
// newNumbers.c.x = 10;     // изменяем свойство x в вложенном объекте c таким образом, 
// // что это повлияет на исходный объект numbers потому что это вложенный объект, 
// // и его свойства не копируются поверхностно


// console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
// console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }  




const add = { // новый объект, который будет добавлен к numbers
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // { d: 17, e: 20, f: 20, g: 30 }
const clone = Object.assign({}, add);// создаём поверхностную копию объекта add

clone.d = 20; // изменяем свойство d в клоне


// console.log(add); // { d: 17, e: 20 }
// console.log(clone); // { d: 20, e: 20 }

const oldArray = ['a', 'b', 'c'];// исходный массив
const newArray = oldArray.slice(); // создаём поверхностную копию массива


newArray[1] = 'd'; // изменяем второй элемент в новом массиве
console.log(newArray); // ['a', 'b', 'c']
console.log(oldArray); // ['a', 'b', 'c']

const video = ['youtube', 'vimeo', 'rutube'],// исходный массив видео
    blogs = ['wordpress', 'livejournal', 'blogger'],// исходный массив блогов
    internet = [...video, ...blogs, 'vk', 'facebook']; // создаём новый массив с помощью оператора расширения spread

console.log(internet); // ['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'facebook']

function log(a, b, c) { // функция для вывода аргументов
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]; // массив чисел
log(...num); // вызываем функцию log с помощью оператора расширения spread, передавая элементы массива num как отдельные аргументы

const array = ['a', 'b'];// исходный массив
const newArray2 = [...array]; // создаём поверхностную копию массива с помощью оператора расширения spread

const q = {
    one: 1, // объект с одним свойством
    two: 2 // объект с другим свойством
};
const newObj = { ...q };// создаём поверхностную копию объекта q с помощью оператора расширения spread