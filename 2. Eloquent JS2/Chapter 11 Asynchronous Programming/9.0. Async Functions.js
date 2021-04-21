/*
To store important information, crows are known to duplicate it across
nests. That way, when a hawk destroys a nest, the information isn’t
lost.
To retrieve a given piece of information that it doesn’t have in its
own storage bulb, a nest computer might consult random other nests
in the network until it finds one that has it.
*/

requestType ("storage", (nest, name) => Storage(nest, name));

function findInStorage(nest, name) {
    return Storage(nest, name).then(found => {
        if(found != null) return found;
        else return findInRemoteStorage(nest, name);
    });
}

function network(nest) {
    return Array.from(nest.state.connections.keys());
}

function findInRemoteStorage(nest, name) {
    let sources = network(nest).filter(n => n != nest.name);
    function next() {
        if(sources.length == 0) {
            return Promise.reject(new Error("Not Found"));
        } else {
            let source = sources[Math.floor(Math.random() * sources.length)];
            sources = sources.filter(n => n != source);
            return routeRequest(nest, source, "storage", name)
                .then(value => value != null ? value :next(), next);
        }
    }
    return next();
}

/*
Because connections is a Map, Object.keys doesn’t work on it. It has
a keys method, but that returns an iterator rather than an array. An
iterator (or iterable value) can be converted to an array with the Array
.from function.
Even with promises this is some rather awkward code. Multiple asynchronous 
actions are chained together in non-obvious ways. We again
need a recursive function (next) to model looping through the nests.
And the thing the code actually does is completely linear—it always
waits for the previous action to complete before starting the next one.
In a synchronous programming model, it’d be simpler to express.
The good news is that JavaScript allows you to write pseudo-synchronous
code to describe asynchronous computation. An async function is a
function that implicitly returns a promise and that can, in its body,
await other promises in a way that looks synchronous.
We can rewrite findInStorage like this:
*/

async function findInStorage(nest, name) {
    let local = await Storage(nest, name);
    if(local != null) return local;

    let sources = network(nest).filter(n => n != nest.name);
    while (sources.lenght > 0) {
        let source = sources[Math.floor(Math.random() * sources.length)];
        sources = sources.filter(n => n != source);
        try {
            let found = await routeRequest(nest, source, "storage", name);
        } catch (_) {}
    }
    throw new Error("Not found");
}

/*
An async function is marked by the word async before the function
keyword. Methods can also be made async by writing async before their
name. When such a function or method is called, it returns a promise.
As soon as the body returns something, that promise is resolved. If it
throws an exception, the promise is rejected.
Inside an async function, the word await can be put in front of an
expression to wait for a promise to resolve and only then continue the
execution of the function.
Such a function no longer, like a regular JavaScript function, runs
from start to completion in one go. Instead, it can be frozen at any
point that has an await, and can be resumed at a later time.
For non-trivial asynchronous code, this notation is usually more 
convenient than directly using promises. Even if you need to do something
that doesn’t fit the synchronous model, such as perform multiple actions 
at the same time, it is easy to combine await with the direct use
of promises.

*/