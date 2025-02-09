// let, const and var
// In programming everything is about information storing, get that info out and optimize storing ka hai

/* 'const' is immutable(cannot be reassigned after declaration)
    'let' is mutable while both have blocked scope meaning can only be accessed within {}
    while 'var' is global with No block scoping (leaks outside {})
*/

const accountId = 14453
let accountEmail = "asd@google.com"
var accountPass = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed
accountEmail = "hc@gmail.com"
accountPass = "212121212"
accountCity = "Bengaluru"

console.log(accountId)
console.table([accountId, accountEmail, accountPass, accountCity]);

/* Javascript doesn't understand scope {}
    eg - if(condition) {scope}
       - for(let i=0; i< array.length; i++) {scope}

Thus 'let' was created to fix 'var' scope problem thus majority only use 'const' and 'let'
*/

/* Prefer not to use var because of issue in block scope and functionl scope except in legacy code*/

let accountState
console.log(accountState) // output: undefined

if (true) {
    var c = 5;
  }
  console.log(c); // 5 (leaked)

// 'let' or 'const' variables are in TDZ until declaration
// Accessing them before declaration throws ReferenceError

// console.log(a); // ❌ ReferenceError (TDZ)
let a = 10;

//Block Scoping in Loops:
//let creates a new binding per iteration (fixes loop issues)

// Old `var` problem:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i)); // 3,3,3
  }
  
  // Fixed with `let`:
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i)); // 0,1,2
  }

/* Global Object Pollution:
    var declarations become properties of window (browser)
    let or const do not pollute the global object
*/

/* var globalVar = "I'm on window!";
let privateLet = "I'm not!";
console.log(window.globalVar); // "I'm on window!"
console.log(window.privateLet); // undefined

(Browser code) thus won't work in nodejs

*/

// Object/Array const Mutability: const only prevents reassignment, not mutation

const arr = [1, 2];
arr.push(3); // [1,2,3]
// arr = [4,5]; Reassignment error

const obj = { name: "John" };
obj.age = 30;

// You are correct to point out that you didn't declare age in the const object,
// but JavaScript allows you to add new properties to an object even if it's declared with const. 
// This is because const only prevents reassignment of the variable itself, not mutation of the object it references.

let x = 1;
// let x = 2; // SyntaxError

const n = "Bob";
console.log(`Hello ${n}!`); // "Hello Bob!"

const z = 10, y = 20;
const coords = { z, y }; // { z:10, y:20 }
console.log(coords)

/*

"use strict"; // Prevents undeclared variables, treats all js code as newer version
mistypedVar = 10; // Throws error

// alert(3+3) // we are using nodejs not browser engine

import React from 'react'; // Imports are always const-like 

*/

// Questions: 
// 1) What are the types of immutability (shallow, deep) and what object.freeze() play a role in them 
// 2) Why in the output the for loops are executed in the end whats the process (synchronous and asynchronous) 