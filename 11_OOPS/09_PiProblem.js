// getOwnPropertyDescriptor: It gives the internal properties of object details
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object is not iteratable by default, 
// we can make object iterable using Object.entries
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

/* 
1) Enumerable: If true, the property shows up in for...in loops and Object.keys().
2) Writable: If true, the property value can be changed.
3) Configurable: If true, the property can be deleted or its attributes 
    (except writable: false to true) can be modified.
*/