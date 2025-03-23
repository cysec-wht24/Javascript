/* 
  In this code, we explore how prototypes work in JavaScript. We see how we can
  attach custom methods to built-in prototypes (like Object, Array, and String),
  and how to create prototype-based inheritance between objects.
*/

//-------------------------
// 1. Simple array example
//-------------------------
let myHeros = ["thor", "spiderman"];

//-----------------------------------------------------
// 2. An object with properties and a method
//-----------------------------------------------------
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // 'this' here refers to heroPower object when called as heroPower.getSpiderPower()
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

//-----------------------------------------------------
// 3. Extending the Object prototype
//-----------------------------------------------------
// By default, all objects in JavaScript inherit from Object.prototype.
// If we add a method to Object.prototype, then *every* object can use it.
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
};

// Now heroPower, myHeros, and literally every other object will have access
// to the 'hitesh' method. For instance:
// heroPower.hitesh();  // works
// myHeros.hitesh();    // works too, because arrays are also objects internally

//-----------------------------------------------------
// 4. Extending the Array prototype
//-----------------------------------------------------
// Arrays in JavaScript inherit from Array.prototype, which in turn inherits
// from Object.prototype. We can add custom methods to Array.prototype:
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
};

// This means all arrays (like myHeros) can call the 'heyHitesh' method.
// myHeros.heyHitesh(); // works because myHeros is an array
// heroPower.heyHitesh(); // will NOT work, because heroPower is a plain object, not an array

//-----------------------------------------------------
// 5. Setting up prototype-based inheritance manually
//-----------------------------------------------------

// Let's create a base user object:
const User = {
    name: "chai",
    email: "chai@google.com"
};

// Another object that we want to inherit from User:
const Teacher = {
    makeVideo: true
};

//-----------------------------------------------------
// 6. Old-school way: using __proto__
//-----------------------------------------------------
// By setting Teacher.__proto__ = User, Teacher will look up any property
// it doesn't have (e.g., name, email) on User.
Teacher.__proto__ = User;
// Now, if we do console.log(Teacher.name), it will come from User if not found on Teacher.

// Another object that might inherit from Teacher:
const TeachingSupport = {
    isAvailable: false
};

// Another object that inherits from TeachingSupport:
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

//-----------------------------------------------------
// 7. Modern way: using Object.setPrototypeOf
//-----------------------------------------------------
// Instead of using the __proto__ property, we can set the prototype chain
// with Object.setPrototypeOf(Child, Parent).
Object.setPrototypeOf(TeachingSupport, Teacher);
// Now TeachingSupport inherits from Teacher, and Teacher inherits from User,
// forming a prototype chain: TASupport -> TeachingSupport -> Teacher -> User -> Object.prototype

//-----------------------------------------------------
// 8. Extending the String prototype
//-----------------------------------------------------
// We can also add methods to String.prototype, which all string instances will share.
let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function(){
    // 'this' refers to the specific string instance that called .trueLength()
    console.log(`${this}`);  
    // We can use trim() to remove trailing spaces, then check length
    console.log(`True length is: ${this.trim().length}`);
};

// Now, any string can call .trueLength():
anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();

/*
--------------------------------------------------------------------------------
Key Takeaways:

1. In JavaScript, every object has an internal [[Prototype]] link, accessible via
   __proto__ (older syntax) or Object.getPrototypeOf(obj) (modern syntax).

2. Functions like Array, String, and Object each have their own prototypes 
   (Array.prototype, String.prototype, etc.), which define methods (e.g., 
   Array.prototype.map, String.prototype.toUpperCase). We can add our own 
   methods to these prototypes, but it’s generally not recommended in production 
   because it can cause conflicts.

3. Prototype inheritance means that if an object does not have a property/method, 
   JavaScript looks up the chain in its prototype, then that prototype’s prototype, 
   and so on, until Object.prototype, which finally leads to null.

4. Setting up inheritance between your own objects can be done via:
     - old style: obj.__proto__ = parentObj;
     - modern style: Object.setPrototypeOf(obj, parentObj);

5. By understanding prototypes, you gain deeper insight into how JavaScript 
   looks up properties, how built-in methods are shared, and how you can 
   create inheritance structures without traditional classes.
--------------------------------------------------------------------------------
*/
