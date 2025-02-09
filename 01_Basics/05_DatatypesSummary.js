//Based on how data is stored in memory and accessed, data can be categorized into two types.

// Primitive Data Types: Simple, immutable, and stored directly (by value) in stack
// When retreiving memory stored through PDT you always get back a copy from stack.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive) => Complex, mutable, and stored as references (by reference) in heap memory
// when retreiving you always get back a reference of it.

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//...............................................................................

// Stack And Heap Memory

let myyoutubename = "maydotcom"

let anothername = myyoutubename // made a copy in stack
anothername = "somethingelsedotcom"

console.log(myyoutubename)
console.log(anothername)

let userone = {
    email: "me@gmail.com",
    upi: "user@ybl"
}

let usertwo = userone // both will get same reference from heap
usertwo.email = "may@google.com"

console.log(userone.email)
console.log(usertwo.email) 

// refer to the screenshot for visualization