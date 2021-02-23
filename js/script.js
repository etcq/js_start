"use strict";

// alert('Hello');


//  const result = confirm("Are you here?");
//  console.log(result);

// const answer = +prompt("Вам есть 18?","18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

// const category = 'toys';
// console.log(`https://someurl.com/${category}`);

// const user = "Ivan";
// alert(`Привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + " - object");

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 == 8);



// Условия


// if (4 == 4) {
//     console.log('oK!');
// } else {
//     console.log('Error!');
// }


// const num = 48;
// switch (num) {
//     case 49: 
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('в точку');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;

// }


//  ЦИКЛЫ

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;   
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }


// ФУНКЦИИ
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num);

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function calc(a, b) {
//     return (a + b);
// }



// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// L17 Методы и свойства строк и чисел //

// const str = "test";

// console.log(str.toUpperCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// // console.log(logg.slice(6));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));

// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScritp', done);

// LESSON 20 деструктуризация объектов //

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

//console.log(Object.keys(options).length);

//console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

// let  counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);  
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);

// LESSON 21 Массивы //

const arr = [1, 32, 23, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массивы ${arr}`);
// });

// //arr.pop();
// // arr.push(10);

// //console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join(';'));