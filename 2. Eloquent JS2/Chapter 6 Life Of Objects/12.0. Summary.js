/*
So objects do more than just hold their own properties. They have prototypes, 
which are other objects. They’ll act as if they have properties
they don’t have as long as their prototype has that property. Simple
objects have Object.prototype as their prototype.
Constructors, which are functions whose names usually start with a
capital letter, can be used with the new operator to create new objects.
The new object’s prototype will be the object found in the prototype
property of the constructor. You can make good use of this by putting
the properties that all values of a given type share into their prototype. 
There’s a class notation that provides a clear way to define a
constructor and its prototype.
You can define getters and setters to secretly call methods every time
an object’s property is accessed. Static methods are methods stored in
a class’s constructor, rather than its prototype.
The instanceof operator can, given an object and a constructor, tell
you whether that object is an instance of that constructor.
One useful thing to do with objects is to specify an interface for them
and tell everybody that they are supposed to talk to your object only
through that interface. The rest of the details that make up your object
are now encapsulated, hidden behind the interface.
More than one type may implement the same interface. Code written
to use an interface automatically knows how to work with any number of
different objects that provide the interface. This is called polymorphism.
When implementing multiple classes that differ in only some details,
it can be helpful to write the new classes as subclasses of an existing
class, inheriting part of its behavior.
*/