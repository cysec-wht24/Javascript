// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item); // does not return any value 
//     return item
// } )
// console.log(values);


/* 
=> forEach dont return any value, either you wanted or not

=> filter return some values

=> filter is having callback function which has access to each element, then 
    we have to give the condition. If the condition is satisfies then return
     those values else dont return the values */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     num > 4 // in arrow fnction lecture we talked about when we start a scope then we have to write return 
// } )

// const newNums = myNums.filter( (num) => {
//     return num > 4 // 
// } )

// console.log(newNums);

/* 
Explicit Return: When you use curly braces {} to define the body of the arrow function, 
    you must explicitly use the return keyword to return a value. This is called explicit return.

const newNums = myNums.filter((num) => {
    return num > 4; // Explicit return
});

Here, the return keyword is explicitly used to return the result of the condition num > 4.

Implicit Return: When you omit the curly braces {} and write the function body as a single 
    expression, the result of that expression is automatically returned. This is called implicit return.

const newNums = myNums.filter((num) => num > 4); // Implicit return

Here, the expression num > 4 is implicitly returned without needing the return keyword. */

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);