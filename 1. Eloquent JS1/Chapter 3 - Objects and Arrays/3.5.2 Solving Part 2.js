//...We wrap this in a function
function startsWith(string, pattern) {
    return string.slice(0, pattern.length) == pattern;
}

console.log(startsWith("rotation", "rot"));

//When .charAt takes a piece of string that doesn't exist or .slice
console.log("Pip".charAt(250));
console.log("Nop".slice(1, 10));

//Extracting Cat Names
/*
1. Find the colon in the paragraph
2. Take the part after this colon
3.Split this part into separate names by looking for commas
*/

//.indexOf method - find the first position of a character
function catNames(paragraph) {
    var colon = paragraph.indexOf(":");
    return paragraph.slice(colon + 2).split(", ");
}
console.log(catNames("born 20/09/2004 (mother Yellow Bess): Doctor Hobbles the 2nd, Noog"));