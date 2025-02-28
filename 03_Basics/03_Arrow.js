/* 

=> ES6 came in 2015 and came with lots of new features
=> Arrow function and this keyword are the features of ES6 

*/

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
/* 

=> this keyword tells about current context
=> When we refer to the current context of the object, we use this keyword 

*/

// user.welcomeMessage()
// user.username = "sam" // this will change the current context making sam be the username
// user.welcomeMessage()


/* Here below `this` points to empty(current context) object as we are in node environment, where 
    current context points to empty object as there is no context in global */

// console.log(this); 

/*
 => Node javascript engine is stand alone, earlier javascript engine was only in a browser
 => In brower there is a global object called window object tabhi toh aap window ke saare event capture kar paate hai
    which all come in use in DOM
 */

    // normal function
/* function chai() {
    let username = "may"
    console.log(this); // Object [global]
}

chai() */

// function expression
/* const chai = function () {
    let username = "may"
    console.log(this.username) // undefined
}

chai() */

// arrow function
/* const chai = () => {
    let username = "may"
    console.log(this.username) // undefined
}

chai()  */

// Note: this keyword can be accessible in normal function, act as a global object but not in arrow function

const chai = () => {
    let username = "may"
    console.log(this) // {}
}

chai() 

// () => {} basic arrow function syntax, 

const some = () => {} // can store it inside a vairiable

const addTwo = (num1, num2) => { // can give parameters like this
    return num1 + num2 // Explicit return
}

console.log(addTwo(3,4))

/* // Implicit Return
const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3,4)) 
OR
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4))
*/

// Used a lot in React
// Note: Curly braces {} -> then need to use return
//  but Parenthesis () -> no need to add the return keyword

// say we want to return object, how ?

/* 
const testing = (num1, num2) => {username: "May"}
console.log(testing(3,4)) // undefined 
*/

const testing = (num1, num2) => ({username: "May"}) // correct way
console.log(testing(3,4)) // { username: 'May' }
// Note: To return the object, we should wrap in parenthesis

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {}) // classic function

// arrow function
// myArray.forEach(() => {}) 
    // OR
// myArray.forEach(() => ())
    //DIscussed in Loops

    
