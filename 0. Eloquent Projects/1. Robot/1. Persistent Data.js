/*
Data structures that don’t change are called immutable or persistent.
They behave a lot like strings and numbers in that they are who they are
and stay that way, rather than containing different things at different
times.
In JavaScript, just about everything can be changed, so working with
values that are supposed to be persistent requires some restraint. There
is a function called Object.freeze that changes an object so that writing
to its properties is ignored. You could use that to make sure your
objects aren’t changed, if you want to be careful. Freezing does require
the computer to do some extra work, and having updates ignored is just
about as likely to confuse someone as having them do the wrong thing.
So I usually prefer to just tell people that a given object shouldn’t be
messed with and hope they remember it.
*/

let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);
// → 5