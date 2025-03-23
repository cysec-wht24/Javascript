function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

=> Here's what happens behind the scenes when the new keyword is used:

=> A new object is created: The new keyword initiates the creation of a new 
JavaScript object.

=> A prototype is linked: The newly created object gets linked to the prototype 
property of the constructor function. This means that it has access to properties 
and methods defined on the constructor's prototype.

=> The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return 
value is specified from the constructor, JavaScript assumes this, the newly 
created object, to be the intended return value.

=> The new object is returned: After the constructor function has been called, if it 
doesn't return a non-primitive value (object, array, function, etc.), the newly 
created object is returned.

*/

/* 
1. What the diagram is showing
From the labels—function, Array, String, Object, and null—it’s likely illustrating that everything in JavaScript ultimately inherits from Object.prototype (and then Object.prototype has its own internal reference to null). In other words:

An Array is just a specialized object whose “parent” is Array.prototype, which in turn inherits from Object.prototype.

A String (or any other primitive wrapper like Number, Boolean) also inherits from String.prototype → Object.prototype.

A function in JavaScript is a special type of object, so it also inherits from Function.prototype → Object.prototype.

Eventually, the chain ends at null, which means there is no further “parent” object.

So, the diagram is explaining that every object in JavaScript has a prototype, which itself is an object, and that chain continues up until Object.prototype, which has a prototype value of null. This is called the prototype chain.

2. How the prototype chain works with constructor functions
When you write:


function createUser(username, score) {
  this.username = username;
  this.score = score;
}
and then do:


const chai = new createUser("chai", 25);
this is what happens behind the scenes:

A new object is created: JavaScript sets up a new empty object in memory.

Prototype is linked: That new object’s internal [[Prototype]] is set to createUser.prototype. This means that if chai doesn’t have a property or method, JavaScript will look for it on createUser.prototype.

The constructor function is called: createUser is called with this bound to the newly created object, so inside the function, this.username = username sets username on the new object.

Object is returned: If the constructor function doesn’t return an object explicitly, the new object is returned automatically.

Because the new object chai has its prototype pointing to createUser.prototype, any properties you attach to createUser.prototype become available to chai (and any other object created by new createUser(...)).

Example: Adding methods to the prototype

createUser.prototype.increment = function() {
  this.score++;
};

createUser.prototype.printMe = function() {
  console.log(`price is ${this.score}`);
};
Since chai and tea are both created by new createUser(...), they can each use .increment() or .printMe() even though these methods are not defined directly on them—JavaScript will look up their prototype chain to find them on createUser.prototype.

3. The prototype property vs. the __proto__ property
Every function in JavaScript automatically has a special property called prototype. By default, it’s just an object with a constructor property. This is the object that instances (created via new) will use as their prototype.

Every instance (like chai) has an internal property often accessed in modern JS as Object.getPrototypeOf(chai) or historically via chai.__proto__. This internal property points to the same object as createUser.prototype.

So, for a constructor function Foo, Foo.prototype is the object that becomes the prototype of all objects created by new Foo().

4. Why prototypes are useful
Memory efficiency: Instead of attaching methods inside the constructor every time (which would create a new copy for each instance), you attach methods to Foo.prototype so that all instances share the same methods.

Inheritance: You can build up chains of objects, each one inheriting from another. This is how built-in objects like Array and String inherit from Object.

5. Connecting it all back to your code snippet
You have a function:

function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;
Here, multipleBy5 is itself an object (because functions in JavaScript are objects). So you can set multipleBy5.power = 2; as a property on it. When you log multipleBy5.power, you get 2.

However, if you log multipleBy5.prototype, that’s a different object which is used only if you call new multipleBy5(...) (i.e., if you use it as a constructor). By default, multipleBy5.prototype is an object with a .constructor property, but nothing else. You could add methods there if you intended to use multipleBy5 as a constructor function with new.

In short
The diagram shows that all objects in JavaScript inherit from Object.prototype, and the chain eventually ends in null.

A function’s .prototype object is the template for any objects created via new from that function.

The new keyword creates a new object, links it to the function’s .prototype, and then calls the function with that new object as this.

Attaching methods to the constructor’s .prototype ensures all instances share the same methods rather than each having its own copy.

Those notes you have are describing this exact process: how new works and how objects get linked to their constructor function’s prototype. That’s the big picture behind “prototype” in JavaScript.
*/