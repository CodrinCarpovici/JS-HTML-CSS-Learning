// Write a JS program to replace every letter in a given string 
// with the character following it in the alphabet

function replaceLetters(mydeek){
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "j", "k", "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var final = "";
    var myArray = mydeek.split('');

    for(var x = 0; x < myArray.length; x++){
        for(var i = 0; i < alphabet.length; i++){
            if (myArray[x] == alphabet[i])
                final += alphabet[i+1];
        }
    }
    return final;

}

console.log(replaceLetters("aarbocmabcdefghopmkz"));