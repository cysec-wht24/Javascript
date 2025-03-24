// This function sets the username on the current context.
// It might include complex DB calls in a real-world scenario.
function SetUsername(username) {
    // 'this' here will refer to the object that calls SetUsername.
    // When used with .call(), we explicitly control what 'this' refers to.
    this.username = username;
    console.log("called");
}

// The createUser function constructs a new user object with username, email, and password.
function createUser(username, email, password) {
    // Here we use .call() to invoke SetUsername and explicitly bind 'this' to the new user object.
    // This ensures that SetUsername sets the username property on the new object being created.
    SetUsername.call(this, username);
   
    // Add additional properties to the user object.
    this.email = email;
    this.password = password;
}

// When called with 'new', JavaScript creates a new object, sets its prototype to createUser.prototype,
// and binds 'this' in createUser to the new object.
const chai = new createUser("chai", "chai@fb.com", "123");

// Logging the user object to verify that all properties (username, email, password) are correctly set.
console.log(chai);

/* 
Explicit Binding with .call():
The SetUsername.call(this, username) line explicitly sets the value of this within the SetUsername 
function to the new object created by new createUser(...).

Dynamic Nature of “this”:
The comments explain that this depends on how a function is called. Here, using .call() overrides 
the default binding.

Constructor Function Behavior:
When using the new keyword, JavaScript creates a new object, sets its internal [[Prototype]] to 
createUser.prototype, and binds this in the function to that object.

Early ReactJS & Binding:
=> In early versions of ReactJS (ReactJS v1), developers frequently used .bind() to ensure that the 
context (this) in class methods was correctly bound.
=> This was necessary because the libraries and framework patterns were not as mature or standardized, 
so manually binding methods was common practice.

Global Context vs. Node Context:
=> In a browser's global context, if you don't bind a function, this defaults to the window object.
=> In Node.js, the global context is different – the top-level this is an empty object ({}) rather than window.

Using call():
=> The call() method is used to invoke a function and explicitly pass the current execution context.
=> When you use call(), you supply the object that should be treated as this inside the called function.
=> In other words, call() lets you “borrow” a function and run it as if it were a method on another object.
*/