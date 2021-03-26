/*
Methods are nothing more than properties that hold function values.
*/

let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'