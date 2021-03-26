Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
    
// → a black rabbit

/*
This is a simple instance of a powerful idea. When a piece of code
is written to work with objects that have a certain interface—in this
case, a toString method—any kind of object that happens to support
this interface can be plugged into the code, and it will just work.
This technique is called polymorphism. Polymorphic code can work
with values of different shapes, as long as they support the interface it
expects.
*/