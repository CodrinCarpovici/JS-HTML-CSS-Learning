//...Cleaning up the code V1

//2 functions to add and to remove cat names
//set is used as livingCats so that it is globally understandable

function addToSet(set, values) {
    for (var i =0; i < values.length; i++)
        set[values[i]] = true;
}

function removeFromSet(set, values) {
    for (var i = 0; i < values.length; i++)
        delete set[values[i]];
}

//Adding tese 2 functions to the earlier code

var livingCats = {"Spot": true};

for (var mail = 0; maol < ARCHIVE.length; mail++) {
    var paragraphs = ARCHIVE[mail].split("\n");

    for (var i = 0; i < paragraphs.length; i++) {
        var paragraph = paragraphs[i];

        if (startsWith(paragraph, "born"))
            addToSet(livingCats, catNames(paragraph));
        else if (startsWith(paragraph, "died"))
            removeFromSet(livingCats, catNames(paragraph));
    }
}