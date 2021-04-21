/*
A promise is an asynchronous action that may complete at some point and 
produce a value.
It is able to notify anyone who is interested when its value is available.
The easiest way to create a promise is by calling Promise.resolve.
This function ensures that the value you give it is wrapped in a promise.
If it’s already a promise, it is simply returned—otherwise, you get a new
promise that immediately finishes with your value as its result.
*/

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
// → Got 15

/*
To get the result of a promise, you can use its then method. This
registers a callback function to be called when the promise resolves and
produces a value. You can add multiple callbacks to a single promise,
and they will be called, even if you add them after the promise has
already resolved (finished).
But that’s not all the then method does. It returns another promise,
which resolves to the value that the handler function returns or, if that
returns a promise, waits for that promise and then resolves to its result.
*/

function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "enemies")
    .then(value => console.log("got", value));

/*
This asynchronous function returns a meaningful value. This is the
main advantage of promises—they simplify the use of asynchronous
functions. Instead of having to pass around callbacks, promise-based
functions look similar to regular ones: they take input as arguments
and return their output. The only difference is that the output may
not be available yet.
*/