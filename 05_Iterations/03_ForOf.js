// for-in, for-of, forEach: Array Specific loops.

// ["", "", ""] -> strings in array
// [{}, {}, {}] -> objects in array
// these can be iterated using higher order array loops

/* Syntax of for...of loop:

      for(const iterator of object){

      }

Above object is used as a broader term, it means, on what you want to use loop, dont confused with javascript object

In for...of loop, there is no need to worry about initialisation, increment or decrement.

Instead of giving names like i,j, it is better to use meaningful name, like greetings, greet, numbers, num etc
 */

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
