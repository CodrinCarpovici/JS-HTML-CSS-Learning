/*
So JavaScript classes are constructor functions with a prototype property. 
That is how they work, and until 2015, that was how you had to
write them. These days, we have a less awkward notation.
*/

class Rabbit {
    constructor(type){
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

/*
The class keyword starts a class declaration, which allows us to define
a constructor and a set of methods all in a single place. Any number
of methods may be written inside the declaration’s braces. The one
named constructor is treated specially. It provides the actual constructor 
function, which will be bound to the name Rabbit. The others are packaged
into that constructor’s prototype. Thus, the earlier class declaration 
is equivalent to the constructor definition from the previous
section. It just looks nicer.
*/

/*
-class like function can be used as an expression as well
-when used as an expression it doesn't define a binding but just produces
the constructor as a value
-you are allowed to omit the class name in a class expression
*/

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello
