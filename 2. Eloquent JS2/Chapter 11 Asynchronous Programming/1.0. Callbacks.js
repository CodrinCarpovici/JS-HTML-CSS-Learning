/*
One approach to asynchronous programming is to make functions that
perform a slow action take an extra argument, a callback function. The
action is started, and when it finishes, the callback function is called
with the result.
As an example, the setTimeout function, available both in Node.js
and in browsers, waits a given number of milliseconds (a second is a
thousand milliseconds) and then calls a function.
*/

setTimeout(() => console.log("Tick", 500));