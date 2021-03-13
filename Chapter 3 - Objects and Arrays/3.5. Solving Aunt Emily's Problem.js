//Separating Paragraphs
var words = "Cities of the Interior";
words.split(" ");

//Finding Relevant Paragraphs
//Method chartAt used to get a specific character from a string
var paragraph = "born 15-11-2003 (mother Spot): White Fang";
console.log(paragraph.charAt(0) == "b" && paragraph.charAt(1) == "o" &&
 paragraph.charAt(2) == "r" && paragraph.charAt(3) == "n");
//Check wheter the paragraph starts with the word "born"

//The Method .slice - given paramater a and b it slices a part of the string
console.log(paragraph.slice(0, 4) == "born");




