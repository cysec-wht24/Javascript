const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//truthy values
// "0", 'false', " ", [], {}, function(){} // empty function
// any value inside string becomes truthy values

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


/* Remember: it is true comparison below

    false == 0 ➜ true
    false == '' ➜ true
    0 == '' ➜ true
    && || are called logical operator


    Any value added in string is truthy value
    [] empty arry, empty object are truthy value
    If only function is declared, then that is also truthy value
    Object.key() will return the array
 */

    const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

/* 
    Need to focus on Null and undefined values
    ?? it will check the safety value, based on null or undefined it will assign some other value
    While using ?? operator twice, it will take the 1st assigned value, Example: null ?? 10 ?? 10 ➜ output: 10
    ?? is basically used to handle errors
    nullish and null operator are 2 different thing
    It better to use flag value like true or false as values as null, undefined state you don't know how that value will come

    Ternary operator: it is short cut of writing if else statement
    Syntax: condition ? true : false
 */

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // generally a complex function is set here which 
//  calls value from DB if no value retreived from DB then null is assigned
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator: it is short cut of writing if else statement

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
