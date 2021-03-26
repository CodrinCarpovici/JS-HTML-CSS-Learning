/*
The core idea in object-oriented programming is to divide programs
into smaller pieces and make each piece responsible for managing its
own state.
Such program pieces are modeled using objects. Their interface consists 
of a specific set of methods and properties. Properties that are
part of the interface are called public. The others, which outside code
should not be touching, are called private
Many languages provide a way to distinguish public and private properties 
and prevent outside code from accessing the private ones altogether. 
JavaScript, once again taking the minimalist approach, does
not—not yet at least. There is work underway to add this to the language.
Even though the language doesn’t have this distinction built in,
JavaScript programmers are successfully using this idea. Typically,
the available interface is described in documentation or comments. It
is also common to put an underscore (_) character at the start of property 
names to indicate that those properties are private.
Separating interface from implementation is a great idea. It is usually
called encapsulation.
*/