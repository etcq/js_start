"use strict";

// alert('Hello');


 const result = confirm("Are you here?");
 console.log(result);

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
