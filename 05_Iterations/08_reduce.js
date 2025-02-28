/* 

    => Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    => Whatever we give the initial value, it goes into accumulator
    => Reduce will work on entire array
    => In reduce methods, we get 2 parameter, one is accumulator and other is current value
    => We can assign the value from which we want to start the value in accumulator
    => Used a lot in user cart applications, to add prices of products in it.
*/

const myNums = [1, 2, 3]

/* const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
 */

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//const priceToPay = shoppingCart.reduce((item) => item.price, 0) but reduce requires accumulator
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);