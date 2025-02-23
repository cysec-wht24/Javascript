// const tinderUser = new Object()
const tinderUser = {}

// console.log(tinderUser); 
// We can create the object using {} or new Object(), here both are same 
// We can have any level of nesting in object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// ? plays the role of if-else statement
// console.log(regularUser.fullname?.userfullname?.firstname);

/* we can access the object key using [], for nested value we can use [][], 
Example : regularUser["fullname"]["userfullname"]["firstname"]
We can use optional chainging to avoid the error: ?. */

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// causes the multiple array combined in one array aproblem
// const obj3 = { obj1, obj2 }

// Better approach
// const obj3 = Object.assign({}, obj1, obj2, obj4) 
// first element is target object in this case {} is target object

// better approach by spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/* 
Object.assign(): This method copies all the values of an objects

We can extract keys using Object.keys and values using Object.values from an object

Object.entries() : To get all the values of object in key value pair

hasOwnProperty(): To check the property exists in object or not

To check the different mehoda available in object, use this trick.

Go to browser console
const obj1 = {1:"a",2:"b"} ➜ obj1 ➜ chec all the methods in [prototype]
 */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

/* 

=> Object destructuring is a syntactically sugar, means it only provide the syntax.
=> Object destructuring helps in avaoiding the repeatability of the code.
=> In Object destructuring, we are extracting the property from object. 
=> We can rename the destructure value using colon :
=> When we go to the restaurant and order something, the menu card is API Documentation
=> When we order 'Samosa', we should not worry how it is made, just we have cOnsume it, 
    Somosa is created at the backend, same goes with API.
=> JSON is almost written like object, but key, value pair are stored in string 
    json { "name": "hitesh", "coursename" : "js in hindi" } 
=> Use the url : https://api.github.com/users/hiteshchoudhary
=> Use the API ➜ As the value is into JSON ➜ convert in javascript object ➜ use it, enjoy.
=> Famous API: Random user me: https://randomuser.me/ ➜ use https://randomuser.me/api/
=> We can beautify the JSON using JSON Formatter online editor: https://jsonformatter.org/ ➜ we can beautify the JSON and 
    check it into tree structure ➜ after this we can see how can we deal with it, may be using array or object.

*/

