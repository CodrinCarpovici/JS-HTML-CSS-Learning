let empty = {};
console.log(empty.toString);
// → function toString()…{}
console.log(empty.toString());
// → [object Object]

/*
I pulled a property out of an empty object. Magic!
Well, not really. I have simply been withholding information about
the way JavaScript objects work. In addition to their set of properties,
most objects also have a prototype. A prototype is another object that
is used as a fallback source of properties. When an object gets a request
for a property that it does not have, its prototype will be searched for
the property, then the prototype’s prototype, and so on.
So who is the prototype of that empty object? It is the great ancestral
prototype, the entity behind almost all objects, Object.prototype.
*/

console.log(Object.getPrototypeOf({}) ==
Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

/*
As you guess, Object.getPrototypeOf returns the prototype of an object.
The prototype relations of JavaScript objects form a tree-shaped
structure, and at the root of this structure sits Object.prototype. It
provides a few methods that show up in all objects, such as toString,
which converts an object to a string representation.
Many objects don’t directly have Object.prototype as their prototype
but instead have another object that provides a different set of default
properties. Functions derive from Function.prototype, and arrays derive
from Array.prototype.
*/

console.log(Object.getPrototypeOf(Math.max) ==
Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
Array.prototype);
// → true

/*
You can use Object.create to create an object with a specific prototype.
*/

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabit = Object.create(protoRabbit);
killerRabit.type = "killer";
killerRabit.speak("SKREEE!");
// → The killer rabbit says 'SKREEEE!'

/*
A property like speak(line) in an object expression is a shorthand
way of defining a method. It creates a property called speak and gives
it a function as its value.
*/