// Javascript Execution context: it means, the javascript created by you, how it will run, it is divided into 2 parts

// Calls stack: you have a memory, how will functions go inside that memory and how will they be executed and how they will come out of it

// Can visualize all this in browser engine

/* 
Remember how the call stack works in javascript

Javascript Execution context: it means, the javascript created by you, how it will run

Javascript has 2 execution context: 
1. Global execution context: It is store in 'this', executed in thread, every environment has different global 
    EC eg browser(window object), Deno or node or bun
    remember javascript is single threaded language 
2. Functional execution context
3. Eval execution Context: Present in Mongoose documentation, its basicaly a property of a global object

Javascript code runs in 2 phases:
1. Memory creation phase/ creation phase: Memory is created or allocated for variables and functions declared, 
    it is not executed here, just variables are created, and kept with us. 
2. Execution Phase: we will get all the values

lets see with the example:
*/
              let val1 = 10;
              let val2 = 5;
              function addNum(num1, num2){
                  let total  = num1  + num2;
                  return total;
              }
              let result1 = addNum(val1, val2)
              let result2 = addNum(10, 2)
  /*
          1.  Memory Creation Phase: Here, In 1st cyle we will get
            - val1 -> undefined
            - val2 -> undefined
            - addNum -> defination
            - result1 -> undefined
            - result2 -> undefined
          2.  Execution Phase:
            - val1  <- 10
            - val1  <- 5

For addNum function, now different execution phase will be created

        New variable environment
        Execution thread
        Memory phase:
            val1 -> undefined
                val2 -> undefined - total -> undefined
                Execution context: Here execution happens
                    num1 -> 10
                    num2 -> 5
                    total -> 15 ➜ total will return to global execution context
                The execution context will be deleted after the work is done
                result1 -> 15
                result2 -> here again 2 phased will be created
                    Memory phase
                    Execution Phase
                    here again the total will be calculated and sent to the execution context


*/

/* 

Callstack: All the method will be executed here, it will be removed once the work is done

It follow the LIFO

We can check the flow of function call by giving break points

 */