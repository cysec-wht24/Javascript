/* 

=> Technically javascript is not having class but yes javascript does have classes. class is afeature of ES6.
=> Javascript is a prototyped based language, it is syntactic sugar over existing prototype based inheritance mechanism.


*/

const user = { //object created literally
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username; // //we can access using dot or [] notation
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // this is implicitly defined no need to type it
}
// With the help of new keyword, we can create multiple 
// instances, And we call it as constructor function.
const userOne = new User("hitesh", 12, true) 
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);