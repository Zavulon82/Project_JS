"use strict";

for (let i = 0; i < 3; i++) { //вложенный цикл
    // Внешний цикл
    // Переменная i доступна в этом блоке          
    console.log(i);
    for (let j = 0; j < 3; j++) { // Внутренний цикл
        // Переменная j доступна в этом блоке
        console.log(j);
    }
}
// 0 -i
// 0 -j
// 1 -j
// 2 -j
// 1 -i
// 0 -j
// 1 -j
// 2 -j
// 2 -i
// 0 -j
// 1 -j
// 2 -j  логика вложенного цикла

// Вложенные циклы могут быть полезны для работы с многомерными структурами данных, такими как матрицы или таблицы.


// *
// **
// ***
// ****
// *****
// ****** создание треугольника из звездочек при помощи вложенных циклов

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*'; // добавляем звездочку в строку
    }
    result += '\n'; // добавляем перевод строки после каждой строки звездочек
}
console.log(result);


// Пример вложенных циклов с условием continue и меткой(укозанием в каком из циклов применить continue )
// для этого перед циклом прописываем слово "first:"(можно любое другое имя метки) и после этого в условии continue указываем эту метку
first: for (let i = 0; i < 3; i++) {
    console.log('First level: ${i}');
    for (let j = 0; j < 3; j++) {
        console.log('Second level: ${i}');
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first; // Пропускаем итерацию, если k равно 2
            console.log('Third level: ${k}');
        }
    }
}

// First level: ${ i }   вот так выглядит вывод в консоли данных вложеных циклов
// Second level: ${ i }
// Third level: ${ k }
// Third level: ${ k }
// First level: ${ i }
// Second level: ${ i }
// Third level: ${ k }
// Third level: ${ k }
// First level: ${ i }
// Second level: ${ i }
// Third level: ${ k }
// Third level: ${ k }


for (let i = 2; i <= 16; i++) {
    if (i % 3 === 0) {
        continue;
    } else {
        console.log(i);
    }
}