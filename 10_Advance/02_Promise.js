/* 
=> Promise is in general the thing which will be done in future.
=> In javascript, we use less reference to class, everthing we see as an object reference.
=> Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

=> When we do any task in promise, then it will complete now.but it will complete in future.

Promise has 3 state:

1) Pending: niether fullfilled nor rejected
2) Fullfilled: means the operation is completed successfully
3) Rejected: means operation is failed
 
Promise has 2 part:

1) Consuming promise
2) Creating promise

Usage of Promise:
1) Do an Async Task like DB calls, cryptography, network calls

=> Promise itself is an object - with new key we get the new instance.
=> Promises are introduced in ES6
=> Before promise, Q, Bluebird library were used, now this library is 
integrated in nodejs by default.

Promise eliminates deeply nested callbacks by -
1. Flat Structure (Avoids Nested Callbacks):

example - Callback hell
doSomething(function(result) {
  doAnotherThing(result, function(anotherResult) {
    doYetAnotherThing(anotherResult, function(finalResult) {
      console.log(finalResult);
    });
  });
});

With Promises:

doSomething()
  .then(result => doAnotherThing(result))
  .then(anotherResult => doYetAnotherThing(anotherResult))
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error(error)); // Handles any error in the chain

2) Error Handling (Centralized)
3) Chaining (Sequencing Asynchronous Calls):
4) Asynchronous and Non-blocking:
5) Cleaner Code with async/await


*/
/* 

const promiseOne = new Promise(function(resolve, reject){
   setTimeout(function() {
    console.log('Async task is complete')
   }, 1000) 
}) // Promise is created

promiseOne.then(function(){ // resolve has connection with .then()
    console.log("Promise consumed");
}) 

// but here we didn't connect resolve and then 

 */

const promiseOne = new Promise(function(resolve, reject){ 
//Promise take callback function which take 2 parameters resolve and reject.
    setTimeout(function() {
     console.log('Async task is complete');
     resolve() // call this method
    }, 1000) 
 }) // Promise is created
 
 promiseOne.then(function(){ // resolve has connection with .then()
// We can use .then().then() this is called chaining, in 2nd then we 
// will get the value what we returned from 1st then.
     console.log("Promise consumed");
 }) 
 
 new Promise(function(resolve, eject){
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    }, 1000) // this is a promise till here, it might be handling 
             // different async tasks, the moment it gets done it, 
             // the resolve function inside will inform then then 
             // function that task is done
 
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){ 
    // mostly you will see, object being passed inside resolve
    setTimeout(function(){
        resolve({username: "Cysec", email: "cysec@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); // info inside resolve will get printed 
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Cysec", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

/* // THis is not how you extract, you will have to do chaining
const username = promiseFour.then((user)=> {
    console.group(user);
    return user.username
})

console.log(username);
 */

promiseFour.then((user) => {
    console.group(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log 
// finally(): It tell, after x amount of time, it is done or not.
("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


// Async Await 
/* 
It is like promise concept only, just wait, if work done then 
only it will proceed else it will give error there itself.
The problem with async- awit, we cant handle the error directly
*/

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
} // when using async function you need to ensure some sort of 
  // error handling

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') 
// If we use fetch(), it will take time, so we need to write await in async function.

//      We are saying, hey response convert into json, as the data what we got is in the string format.
//         const data = await response.json() 

// json response takes time to convert so you will have to await it as well
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all => this is also available