const myAr = [0, 1, 2, 3, 4, 5, true, hello]

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

// Can contain a mix of different datatypes, not associative arrays by which I mean 
// In summary, JavaScript arrays are not associative because they use integer indices, 
// while languages like PHP support associative arrays with string keys. 
// In JavaScript, you would use objects or Map for associative behavior.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// We can view all the methods available in array in browser engine.
// Example:

// const numbers = [1,2,3,4];
// console.log(numbers) ➜ click on prototype to see the methods

// Array methods

// myArr.push(6) // adds in the last 
// myArr.push(7)
// myArr.pop() // remove last element

// myArr.unshift(9) // adds value in first place by shifting every element
// myArr.shift() // removes first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // add all the element in the array but gives output into string

// console.log(myArr);
// console.log( newArr); 


// slice, splice

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/* 
slice(): It will not update the orignal array, here last range is not included, will give 
the extracted array from start to end value.
splice(): It will update the original array, Gives the extracted array as output.
concat(): It will combine 2 arrays and gives the new array
spread operator: think glass of water, when glass fall ➜ water spread to the ground : remember
In spread operator, we will get the spread out values

*/