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


/* Here below `this` points to empty object as we are in node environment, where 
    current object points to empty object */

// console.log(this); 


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()