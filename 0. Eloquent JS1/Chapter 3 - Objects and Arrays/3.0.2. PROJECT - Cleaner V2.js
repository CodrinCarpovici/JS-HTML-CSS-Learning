//...Cleaner V2

//Code assumes we have a variable ARCHIVE where we have stored
//all the emails, i.e strings

function findLivingCats() {
    var livingCats = {"Spot": true};

    function handleParagraph(paragraph) {
        if (startsWith(paragraph, "born"))
            addToSet(livingCats, catNames(paragraph));
        else if (startsWith(paragraph, "died"))
            removeFromSet(livingCats, catNames(paragraph));
    }

    for (var mail = 0; mail < ARCHIVE.length; mail++) {
        var paragraphs = ARCHIVE[mail].split("\n");

        for (var i = 0; i< paragraphs.lenght; i++)
            handleParagraph(paragraphs[i]);
    }

    return livingCats;
}

var howMany = 0;
for (var cat in findLivingCats())
    howMany++;
//Counter for living cats

console.log("There are currently ", howMany, " cats alive.");

