//Abstraction

function printArray(array) {
    for (var i = 0; i < array.length; i++)
        console.log(array[i]);
}

//Doing something can be represented as a function


function forEach(array, action) {
    for (var i = 0 ; i < array.length; i++)
        action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], function(x) { console.log(x)});
//We can pass our action as a function value

//By making use of anonymous function, we can write a for loop with less
//useless details

function sum(numbers) {
    var total = 0;
    forEach(numbers, function (number) {
        total += number;
    });
    return total;
}
//Example 2
//Cat function

var paragraphs = mailArchive[mail].split("\n");
for (var i = 0; i < paragraphs.length; i++)
handleParagraph(paragraphs[i]);

//Ca be re-written as

forEach(mailArchive[mail].split("\n"), handleParagraph);
