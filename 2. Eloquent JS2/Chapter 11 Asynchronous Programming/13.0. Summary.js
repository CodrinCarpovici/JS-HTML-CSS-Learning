/*
Asynchronous programming makes it possible to express waiting for
long-running actions without freezing the program during these actions.
JavaScript environments typically implement this style of programming
using callbacks, functions that are called when the actions complete. An
event loop schedules such callbacks to be called when appropriate, one
after the other, so that their execution does not overlap.
Programming asynchronously is made easier by promises, objects
that represent actions that might complete in the future, and async
functions, which allow you to write an asynchronous program as if it
were synchronous.
*/