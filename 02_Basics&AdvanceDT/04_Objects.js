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

//better approach
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