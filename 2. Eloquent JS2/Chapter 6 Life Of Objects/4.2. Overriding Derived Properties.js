/*
When you add a property to an object, whether it is present in the
prototype or not, the property is added to the object itself. If there was
already a property with the same name in the prototype, this property
will no longer affect the object, as it is now hidden behind the object’s
own property.
*/

Rabbit.prototype.teeth ="small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

console.log(Array.prototype.toString == Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2

/*
Calling toString on an array gives a result similar to calling .join
(",") on it—it puts commas between the values in the array. Directly
calling Object.prototype.toString with an array produces a different
string. That function doesn’t know about arrays, so it simply puts the
word object and the name of the type between square brackets.
*/
console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]
