// for-in, for-of, forEach: Array Specific loops.

// ["", "", ""] -> strings in array
// [{}, {}, {}] -> objects in array - used a lot in ForEach
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

// Maps

/* 
    Map is use to store key, value pair

    Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

    Map is like object with slight difference

    Map is used to store unique values, persist the same order how it entered

    We can iterate the Map using for...of loop by destructuring the value

  for(const [key, value] of countries){
      console.log(`Key: ${key} Value: ${value}`)
  }

    Note: Not possible to iterate the object using for..of

*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

/* for (const key of map) {
    console.log(key); // Eh, prints the whole array we don't want that, we want indivisual values
} */

for (const [key, value] of map) {
    console.log(key, ':-', value);
}// maps are iterable through for of loop

/* const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
    OR 

    const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
In Both of them myObject is not iterable, thus maps are iterable by this way of for loop 
    but not in case of objects, there are other ways of iterating objects
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }  
// */
