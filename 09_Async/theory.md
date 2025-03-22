We should know basics like, Javascript is

    Synchronous: Execute one line of code at a time.
    Single threaded languge: Work on 1 thread, slow language as compared to other
    Execution context: Execute one line of code at a time. Here Each operation waits for the last one to complete before executing

There are 2 types of code in javascript

    Blocking Code: Block the flow of the program ➜ Read the file
    Non-Blocking Code:Does not block execution ➜ Read file Async

    JS Engine - aka the alone js execution engine, made out of memory heap and call stack

    Web API - Only present in browser by WebAPI we mean a sort of Runtime so it can be Deno, Node these are all environment, if we have WebAPI we would have access to DOM API from browser console or else not

    Task Queue - it is what makes js so fast asynchronous

    Promise - Has high priority queue (has diff names.)

    Everytime a program is executed it’s call stack is made, inside which a global execution context is made, and one by one functions are loaded, as the functions are executed they are unloaded fom the stack whereas in memory heap memory allocation takes place

    # 2 Projects

    handler - callback function that has no name
    Made used of asynchronous capablity by using setTimeOut event
    Onchange of start button change the background color, after every sec background color should change.
