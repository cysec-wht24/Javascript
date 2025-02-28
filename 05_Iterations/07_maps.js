const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

/* 
=> Looks better than forEach loop
=> It also have a callback
=> map automatically return the new array
=> Chaining methods: means we can apply multiple methods at once
=> Whatever values are passed in chaining it will be passed to respective methods
*/