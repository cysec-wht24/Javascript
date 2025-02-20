function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))



/*     
    => While learning about functions, it is important to 
        know about memory management as well.

    => Function means, what the 10, 20 etc lines of code 
        you have writte, we kept in package

    => We can resue the package, as much as we want

    => To write a function, we give function keywords, function
     name, then pranthesis then scope of function, this is called function defination
    
    => To call the function, we function name with parenthesis, 
        then function will execute it.
    
    => In javascript, it automatically check the datatype of value, so it is 
        important to check the type of any variable before doing any operations
    
    => function parameter : while creating the function defination, whatever the 
        inputs we take, we call it as parameters
    
    => function arguments: The values which we pass in the function call, we call
         it as an argument
    
    => It is important to know, what we are sending form the function
    
    => Note: Whatever you write after function return, nothing will work
    
    => undefined and "" empty string is considered as false value
    
    => So to check the error, check with false value ➜ Example: if(!username)
    
    => We can give default value in function parameter with equals to, 
        Example loginUserMessage(username = "sam") ➜ it will avoid to go into
        error check, if no username available
    
    => Rest Operator: ... when these 3 dots comes in parameter, 
        it means get all the values and give me in bundle.
    
    => Example: Get all the values in cart value
    
    */

    function calculateCartPrice(val1, val2, ...num1){
        return num1
    }
    
    // console.log(calculateCartPrice(200, 400, 500, 2000))
    
    const user = {
        username: "hitesh",
        prices: 199
    }

    function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }

    // handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

