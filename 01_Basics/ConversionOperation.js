// Converting to Number
let score = "Man-of-may";

console.log(typeof score);  // "string"
console.log(typeof(score)); // "string"

let valueInNumber = Number(score);

console.log(typeof valueInNumber); // "number"
console.log(valueInNumber);        // NaN (because "Man-of-may" is not a numeric string)

// Examples of Number conversion:
console.log(Number("33"));     // 33
console.log(Number("33abc"));  // NaN
console.log(Number(""));       // 0
console.log(Number(null));     // 0
console.log(Number(undefined));// NaN

// Converting to Boolean
let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  // true (non-empty string is truthy)

// Additional Boolean examples:
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean({}));   // true (objects are truthy)

// Converting to String
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);         // "33"
console.log(typeof stringNumber);  // "string"

// Additional String conversion examples:
console.log(String(true));    // "true"
console.log(String(false));   // "false"
console.log(String([1, 2, 3])); // "1,2,3"

// A common pattern to convert to boolean is to use the double NOT operator (!!):
let vaalue = "some text";
console.log(!!vaalue); // true

console.log(NaN === NaN); // false

// Use Number.isNaN(value) to check if a value is NaN.

// *********************** Operations ***********************

// Imp. for interview purposes
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// code readability on top mate please don't write like this

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//prefix mei value pehle increment ho jati hai aur postfix mei usage ke baad increment hoti hai

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
