/*
Objects and arrays (which are a specific kind of object) provide ways
to group several values into a single value. Conceptually, this allows us
to put a bunch of related things in a bag and run around with the bag,
instead of wrapping our arms around all of the individual things and
trying to hold on to them separately.
Most values in JavaScript have properties, the exceptions being null
and undefined. Properties are accessed using value.prop or value["prop
"]. Objects tend to use names for their properties and store more or less
a fixed set of them. Arrays, on the other hand, usually contain varying
amounts of conceptually identical values and use numbers (starting from
0) as the names of their properties.
There are some named properties in arrays, such as length and a
number of methods. Methods are functions that live in properties and
(usually) act on the value they are a property of.
You can iterate over arrays using a special kind of for loop—for (
let element of array).
*/