const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( greet = () => { // now no need to name it (ie- is "greet" here)
//     console.log(item);
// } )


// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

const numbers = [10, 20, 30];

// Logging the element, its index, and the entire array
numbers.forEach((number, index, array) => {
    console.log(`Element: ${number}, Index: ${index}, Array: ${array}`);
});

/* 
=> For most of the time, we may use forEach loop for array
=> Array has some inbuilt methods, here forEach method, so we can use it to access the elements of an array
=> Passing callback means give me the function to operate
=> callback function doesn't have name
=> While iterating an array, every time the function will get executed, and take as a paramater to it.
=> forEach doesnt only return item, but it will return item, index and whole array
=> callback has access to all the element of an array
 */