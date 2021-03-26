/*
JavaScript’s prototype system can be interpreted as a somewhat informal 
take on an object-oriented concept called classes. A class defines
the shape of a type of object—what methods and properties it has.
Such an object is called an instance of the class.
*/

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}
    
/*
JavaScript provides a way to make defining this type of function
easier. If you put the keyword new in front of a function call, 
the function is treated as a constructor. This means that an object with
the right prototype is automatically created, bound to this in the function,
and returned at the end of the function.
*/

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) ==
Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) ==
Rabbit.prototype);
// → true
