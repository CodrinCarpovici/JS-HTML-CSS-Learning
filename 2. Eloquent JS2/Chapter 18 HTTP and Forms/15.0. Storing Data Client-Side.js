/*
Simple HTML pages with a bit of JavaScript can be a great format
for “mini applications”—small helper programs that automate basic
tasks. By connecting a few form fields with event handlers, you can do
anything from converting between centimeters and inches to computing
passwords from a master password and a website name.

The localStorage object can be used to store data in a way that
survives page reloads. This object allows you to file string values under
names.
*/

localStorage.setItem("username", "marjin");
console.log(localStorage.getItem("username"));
//->marjin
localStorage.removeItem("username");
