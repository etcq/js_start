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

// const arr = [1, 32, 23, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

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

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(';'));

// LESSON 22 Spread оператор //

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Ссылка на объект  

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
    
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: { 
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

//console.log(add);
//console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1]='asdasdads';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};






//                      LESSON 23 основы ООП                //

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     heath: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("hello");
//     }
// };

// const jonh = Object.create(soldier);

// const jonh = {
//     heath: 100,
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

//console.log(jonh.armor);
// jonh.sayHello();

//                  LESSON 25 Breakpoints           //

// function hello() {
//     console.log('Hello world');
// }

// hello();

// function hi() {
//     console.log('Say hi!');
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);

//                          Lesson 26 Динамическая типизация            //

// To string

//1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

//2)
// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

//To Number 

//1)
// console.log(typeof(Number('4')));

//2)
// console.log(typeof(+'5'));
//3)
// console.log(typeof(parseInt("15px", 10)));

// To boolean 

// 0, '', null, undefined, NaN;

//1)
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

//2)
// console.log(typeof(Boolean('4')));

//3)
// console.log(typeof(!!'444444'));

//                                  Lesson 27 Задачи с собеседований                //
//let x = 5; alert( ++x ); 
//[ ] + false - null + true 
//console.log([] + false - null + true); //NaN

//let y = 1; 
//let x = y = 2; 
//alert(x); 

//console.log([] + 1 + 2); //12

//alert( "1"[0] );

//console.log(2 && 1 && null && 0 && undefined );
// И запинается на лжи
// ИЛИ запинается на правде

// console.log(!!( 1 && 2 ) === (1 && 2));
//alert( null || 2 && 3 || 4 );

// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; 

//alert( +"Infinity" ); 
//console.log("Eжик" > "яблоко");

//console.log(0 || "" || 2 || undefined || true || falsе );