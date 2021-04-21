const { defineRequestType } = require("./crow-tech");

class Timeout extends Error { }
function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n) {
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed) reject(failed);
                else resolve(value);
            });
            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout("Timed out"));
            }, 250);
        }
        attempt(1);
    });
}

/*
Because promises can be resolved (or rejected) only once, this will
work. The first time resolve or reject is called determines the outcome
of the promise, and further calls caused by a request coming back after
another request finished are ignored.
To build an asynchronous loop, for the retries, we need to use a
recursive function—a regular loop doesn’t allow us to stop and wait for
an asynchronous action. The attempt function makes a single attempt
to send a request. It also sets a timeout that, if no response has come
back after 250 milliseconds, either starts the next attempt or, if this
was the third attempt, rejects the promise with an instance of Timeout
as the reason.
Retrying every quarter-second and giving up when no response has
come in after three-quarter second is definitely somewhat arbitrary. It
is even possible, if the request did come through but the handler is
just taking a bit longer, for requests to be delivered multiple times.
*/

function requestType(name, handler) {
    defineRequestType(name, (nest, content, source,
                              callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback(null, response),
                      failure => callback(failure));
        } catch (exeption) {
            callback(exeption);
        }
    });
}

/*
Promise.resolve is used to convert the value returned by handler to
a promise if it isn’t already.
Note that the call to handler had to be wrapped in a try block to make
sure any exception it raises directly is given to the callback. This nicely
illustrates the difficulty of properly handling errors with raw callbacks—
it is easy to forget to properly route exceptions like that, and if you don’t
do it, failures won’t get reported to the right callback. Promises make
this mostly automatic and thus less error-prone.
*/