console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// The reason is that an equality check == and comparison > < >= <=
// works differently. Comparisons convert null to a number, treating it as 0.
// Thats why null >= 0 is true and null > 0 is false

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === strict check, checks not only values but their datatypes

console.log("2" === 2); // false