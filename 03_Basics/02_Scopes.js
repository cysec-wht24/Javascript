//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


/* 
=> Scopes story starts with var, let and const
=> {} : This is called as scope
=> When {} comes with function or if, then we called its scope
=> When any thing declared inside {} it is called block scope, and outside of {} is called global scope
=> value declare in global scope ➜ it is available in block scope but value declared in block scope is 
    not available in global scope.
=> var is functional scope, where as const, let are block scope.
=> Global scope is different for node environment and browser

*/

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

/* 

=> Kids can ask ice cream from elder but it is awekword if elder ask the ice cream from kids.
=> It means, inner function can access the variable from outside but outside function cant ask 
    inner member variables etc.
=> Variables declared inside a function cannot be accessed outside the function.

=> Every time function is called, then every time it is kept in stack it also partially defined as closure
    Closure in simple line, the inner function can access the outside declared variable
*/

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// There are 2 technique to create a function, using bassic function, other is function expression

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // Due to concept of hoisting this way of function declaration will give error
const addTwo = function(num){
    return num + 2
}

// Hositing is not possible with function expression, but hoisting is possible with basic function only