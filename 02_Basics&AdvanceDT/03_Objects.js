/* To master javascript, we need to learn 2 things

     Objects
     Events
 */

/* Objects can be declared in 2 ways

     Literal
     Constructor
  */

// there are 2 ways of declaring objects 



// Singleton: It means, only 1 object is created. 
// When the object is created using constructor, it is singleton
// Example: const JsUser = {}

Object.create // contructor method ke through, iske andar singleton banta hai

const mySym = Symbol("Key1")

// object literals
const JsUser = {
    name: "May",
    "full name": "Man of May",
    [mySym]: "mykey1",
    age: 18,
    location: "Earth",
    email: "may@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// 2 ways to access objects
// console.log(JsUser.email)
// console.log(JsUser[email]) // error
// console.log(JsUser["email"])

// console.log(JsUser["full name"]) // only way to acess this value
console.log(typeof JsUser.mySym) // undefined, incorrect way of interacting with symbol
console.log(typeof JsUser[mySym]) // string correct as mykey1 is string
console.log(JsUser[mySym]) // mykey1 correct way of accessing Symbol

JsUser.email = "hmm@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "changed@microsoft.com"
// console.log(JsUser);

/*
Object has keys and values. 
By Default key is in the string format in object
To access the object element, we use JsUser["name"] , it means we are accessing using string

we can update the value of the user using '=' (equal to)
We can freeze the object using Object.freeze() to avoid the further update

To define Symbol, we use square bracket [], it says I am a symbol

Function can be treated as a varaible in javascript

We can get the reference if we dont give paranthesis in function call with object
Example: JsUser.greeting ➜ [Function (anonymous)]
*/

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingtTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // String interpolation ``
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

/*
If we want to reference the same object, then we can use 'this'. 

*/
