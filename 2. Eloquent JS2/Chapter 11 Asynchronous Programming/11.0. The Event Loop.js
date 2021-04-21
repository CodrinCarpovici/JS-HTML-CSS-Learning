let start = Date.now();
setTimeout(() => {
    console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) { }
console.log("Wasted time until", Date.now() - start);
// → Wasted time until 50
// → Timeout ran at 55

/*
Promises always resolve or reject as a new event. Even if a promise
is already resolved, waiting for it will cause your callback to run after
the current script finishes, rather than right away.
*/

Promise.resolve("Done").then(console.log);
console.log("Me first!");
// → Me first!
// → Done
