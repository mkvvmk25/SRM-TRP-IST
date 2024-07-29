"use strict";
// a = 45;
// let b = 45; // local scope
// var c = 78; // global scoped
// let e;
// const PI = 3.14;
// PI = 78;

/* 
    variable 
        let 
        var
        const
        

    datatypes
        number (int, float)
        bool 
        string 
        null
        undefined 
        NaN  --> Not A number 

*/

// let a = 45.2321;
// let b = 52;
// let w = typeof a;
// let wq = typeof b;
// console.log(w , wq);
// console.log(w);
// console.log(typeof "45");

// let f = "qwerty"; // string
// let a = "hello";
// let b = "world";
// let c = f + " " + a + " " + b;
// // template string
// let g = `${45 + 2}__${a}__${b}`;
// console.log(g);
// console.log(c);

// let d = null;
// console.log(d);
// let f;
// console.log(f);
// console.log("9"+"10" * 10);
// console.log("9"+"ad" * 10);
// type coerssion

// operators
// arthe
// + - / % * **
// logi
// && || !
// (1 == 2) && (2 != 3)
// rel
//  == != < <= > >= !== ===
// ternary
// inc / dec
// bitwise
// << >>  | & ~ ^
// assignment

// let d = 1 != 1 ? 45 : 25;
// let f = 100;
// f = f >> 3;
// console.log(f);

// 4 byte -> 32bits

//  00000000 00000000 00000000 00001010
// 00000000 00000000 00000000 000101000

// 1010
// 1111

// 0101

// https://bit.ly/RA-290724

// conditional statments
// if (1 == 2) {
//   console.log("hello");
// }
// else if(1 != 8)
// {
//     console.log("784");
// }
// else {
//   console.log("world");
// }
// let k = "78s";
// switch (k)
// {
//     default:
//         console.log("world");

//     case "78":
//         console.log("78");

//     case "98":
//         console.log("98");
//         break;
// }
// let a = 5; // 3
// let b = ++a; // 6
// let b1 = a--; // 6
// let b2 = --a; // 4
// let b3 = a--; 4
// console.log(a+b+b1+b2+b3);

// 6 24 25 20 15

// looping statments
// for (let i = 0; 1 != 1; i++) {
//   console.log(i + 1);
// }
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i = i + 1;
// }

// // // pok g
// // kl

// named function
// refrenced function
// 2 types

// function fun()
// {
//   // fun declarartion
//   console.log("hello"); // fun definitions
// }

// function abc(a, b) {
//   console.log(a + b);
//   return undefined;
// }
// function qwe(a, b) {
//   return a + b;
// }

// let r = abc(1, 2);
// let e = qwe(3, 5);

// console.log(r, e);

let fun = function () {
  console.log("helo");
};
let funone = function (a, b) {
  console.log("world");
};
let funthree = function (a, b) {
  return a + b;
};

// arrays
let arr = ["stribg", 45, 4.242, true, null, undefined, NaN];
//  0       1     2
// traversing
// for loop
// console.log(arr);
// for(let i = 0; i < arr.length; i=i+1 )
// {
//   console.log(arr[i], i, "---<");
// }

// for each loop
// arr.forEach(function (ele, ind, arr) {
//   console.log(ele, ind, arr);
// });

// arrow funtions its also anynomous funs

let abc = () => 25;
let abcd = (a, b) => 25 + a + b;

let abcde = 
  (a, b) => 
  {   // fun block
    return 25 + a + b;
  }; 

let d = abcde(10, 20);
console.log(d);
