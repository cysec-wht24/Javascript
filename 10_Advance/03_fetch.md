=> fetch is a method in nodejs
=> Back then we were using XMLHttpRequest, but it was very hard to implement with other libraries like jquery etc.
=> Fetch API was available but not included in nodejs environment, as fetch api was heavily dependent on browser.
=> We can stop the node request using abortController.
=> All async calls will be done using fetch only.
=> fetch is a global mothod which start the process to fetch the resource from a network. It return the promise

Reference: https://developer.mozilla.org/en-US/docs/Web/API/fetch

=> A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

Documentation read by browsers - https://fetch.spec.whatwg.org/#fetch-method

=> Special queue is created for fetch in event loop or called as "Micro task queue or Priority queue or fetch queue", It is VIP line.

// say response = fetch("something)

fetch works in 2 parts:-
=> Variables or memory to reserve DATA space: This one works first before Web Browser To reserve the memory space, we may call data, other is arrays, onFulfilled(promise - resolve()), onRejection(promise - reject()) inside both of which we get function. We can't access those arrays. These are private field although data is also private field.
=> Web browser based API/ Nodejs API: Here nodejs add the feature of brower, It will handle the web API ➜ From it(Node/Web API) will call the network request ➜ either we will get the date then it goes to onfulfilled or if no data found it goes to onRejection.

=> All the errors or 404 - file not found you only get to know about this info when the request came back from network request thats why it is counted in onfulfilled[]

in first part of Fetch - Data/variable - reserved in memory, initialy empty, the function we recieve from the the array are responsible to fulfill the data

Once the data value is fulfilled, the "response" variable is available in global memory, its the data responsiblity to fulfill that response