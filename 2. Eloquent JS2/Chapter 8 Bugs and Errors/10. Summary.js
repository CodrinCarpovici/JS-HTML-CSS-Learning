/*
Mistakes and bad input are facts of life. An important part of programming 
is finding, diagnosing, and fixing bugs. Problems can become easier to 
notice if you have an automated test suite or add assertions to your 
programs.
Problems caused by factors outside the program’s control should
usually be handled gracefully. Sometimes, when the problem can be
handled locally, special return values are a good way to track them.
Otherwise, exceptions may be preferable.
Throwing an exception causes the call stack to be unwound until the
next enclosing try/catch block or until the bottom of the stack. The
exception value will be given to the catch block that catches it, which
should verify that it is actually the expected kind of exception and then
do something with it. To help address the unpredictable control flow
caused by exceptions, finally blocks can be used to ensure that a piece
of code always runs when a block finishes.
*/
