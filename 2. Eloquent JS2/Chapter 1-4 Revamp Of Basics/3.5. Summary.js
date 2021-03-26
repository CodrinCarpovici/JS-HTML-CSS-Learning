// Define f to hold a function value
const f = function(a) {
    console.log(a + 2);
};
// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}
// A less verbose function value
let h = a => a % 3;

/*
A key aspect in understanding functions is understanding scopes.
Each block creates a new scope. Parameters and bindings declared in a
given scope are local and not visible from the outside. Bindings declared
with var behave differently—they end up in the nearest function scope
or the global scope.
Separating the tasks your program performs into different functions
is helpful. You won’t have to repeat yourself as much, and functions can
help organize a program by grouping code into pieces that do specific
things.
*/