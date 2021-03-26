function speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
}
let whiteRabbit = {type : "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
// late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

/*
You can think of this as an extra parameter that is passed in a
different way. If you want to pass it explicitly, you can use a function’s
call method, which takes the this value as its first argument and treats
further arguments as normal parameters.
*/

speak.call(hungryRabbit, "Burp!");
speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]

/*
If I had written the argument to map using the function keyword, the
code wouldn’t work.
*/