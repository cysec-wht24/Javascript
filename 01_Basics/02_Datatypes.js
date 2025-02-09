/* 

Documentation by Mozilla
https://developer.mozilla.org/en-US/docs/Web/JavaScript


Original Js standards documentation 
https://tc39.es/ecma262/

*/

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53, Special values: Infinity, -Infinity, NaN
console.log(0.1 + 0.2); // 0.30000000000000004 (floating-point precision issue)
// bigint => For numbers > 2⁵³ - 1 (suffix with n)
const big = 123456789012345678901234567890n;
// string => ""
// boolean => true/false, Falsy values: 0, "", null, undefined, NaN, false
// null => standalone value
// undefined => variable declared but not assigned
// symbol => Unique, immutable identifiers, Used for object properties (avoid name collisions)
const id = Symbol("uniqueId");

// object => Subtypes: Array, Function, Date, RegExp, etc.
typeof [];     // "object"  
typeof {};     // "object"  
typeof null;   // "object" (quirky behavior)

//functions => callable objects
typeof function() {}; // "function"  

console.log(typeof undefined); // undefined
console.log(typeof null); // object
