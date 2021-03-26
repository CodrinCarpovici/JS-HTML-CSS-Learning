//Extended version

function findCats() {
    var cats = {"Spot": catRecord("Spot", new Date(1997, 2, 5), "unknown")};

    function handleParagraph(paragraph) {
        if (startsWith(paragraph, "born"))
            addCats(cats, catsNames(paragraph), extractDate(paragraph),
            extractMother(paragraph));
        else if (startsWith(paragraph, "died"))
            deadCats(cats, catNames(paragraph), extractDate(paragraph));
    }

    for (var mail = 0; mail < ARCHIVE.length; mail++) {
        var paragraphs = ARCHIVE[mail].split("\n");
        
        for (var i = 0; i <paragraphs.length; i++)
            handleParagraph(paragraphs[i]);
    }
    return cats;
}

