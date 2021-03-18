//Objects as Collections - Arrays

function range(upto) {
    var result = [];
    for (var i = 0; i <= upto; i++)
        result[i] = i;
    return result;
}
console.log(range(4));

//ARCHIVE

var mailArchive = {0: "Dear nephew, ... (mail number 1)",
1: "(mail number 2)",
2: "(mail number 3)"};

for (var current = 0; current in mailArchive; current++)
    console.log("Processing email #", current, ": ", mailArchive[current]);

//ARCHIVE with array
var mailArchive = ["mail one", "mail two", "mail three"];

for (var current = 0; current < mailArchive.length; current++)
    console.log("Processing email #", current, ": ", mailArchive[current]);