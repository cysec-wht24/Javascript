/* 

Immediately Invoked Function Expressions (IIFE)

=> The function which has its own scope and executed immediately 
=> IIFE: Function defination is wrapped in paranthesis and use empty parenthesis for execution: ()()
=> To avoid the use of global variable, as global variable pollute the variable, so we use IIFE
=> To stop the IIFE, It is important to add the semicolon after IIFE
=> We can write IIFE using normal function as well as arrow function
=> Remember 2 IIFE can be written by seperating semicolon

*/

// Used in files which have DB connections, so we might want immediate connnection when program execute
// Also to prevent pollution from global scope so we make an entirely new scope, kyuki function mei scope bann hih jata hai

/* function chai() {
    console.log(`DB Connected`);
}
chai() */

// But what about when global scope pollutes this function, we don't want that to happen

// Last lecture we discussed that if we wrap function around parenthesis, it becomes a block

(function chai() { // named IIFE
    console.log(`DB Connected`);
})(); // Need to apply semicolon here as this IIFE does not know where to stop the context 

// How this work ?
//()() -> (function defination)(execution call)

// As we were putting chai() where () also an execution call similar to that we are putting
// execution call like this ()() where the function has been wrapped with parenthesis 

(() => { // Simple/unamed IIFE
    console.log(`DB connected 2`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('may')