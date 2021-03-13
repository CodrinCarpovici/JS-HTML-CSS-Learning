//Test Version

var ARCHIVE = ['Dear nephew,\
Your mother told me you have taken up skydiving. Is this true?\
You watch yourself, young man! Remember what happened to my\
husband? And that was only from the second floor!\
Anyway, things are very exciting here. I have spent all week trying\
to get the attention of Mr. Drake, the nice gentleman who moved\
in next door, but I think he is afraid of cats. Or allergic to them?\
 \
I am going to try putting Fat Igor on his shoulder next time I see\
him, very curious what will happen.\
Also, the scam I told you about is going better than expected. I\
have already gotten back five “payments,” and only one complaint.\
It is starting to make me feel a bit bad though. And you are right\
that it is probably illegal in some way.\
[etc., etc.]\
Much love,\
Aunt Emily\
died 27/04/2006: Black Leclère\
born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor\
Hobbles the 3rd, Little Iroquois',
'Dear nephew,\
Your mother told me you have taken up skydiving. Is this true?\
You watch yourself, young man! Remember what happened to my\
husband? And that was only from the second floor!\
Anyway, things are very exciting here. I have spent all week trying\
to get the attention of Mr. Drake, the nice gentleman who moved\
in next door, but I think he is afraid of cats. Or allergic to them?\
 \
I am going to try putting Fat Igor on his shoulder next time I see\
him, very curious what will happen.\
Also, the scam I told you about is going better than expected. I\
have already gotten back five “payments,” and only one complaint.\
It is starting to make me feel a bit bad though. And you are right\
that it is probably illegal in some way.\
[etc., etc.]\
Much love,\
Aunt Emily\
died 27/04/2006: Black Leclère\
born 05/04/2006 (mother Lady Penelope): Rd Lion, Doctor\
Hobbles the 3rd, Little Iroquois',
'Dear nephew,\
Your mother told me you have taken up skydiving. Is this true?\
You watch yourself, young man! Remember what happened to my\
husband? And that was only from the second floor!\
Anyway, things are very exciting here. I have spent all week trying\
to get the attention of Mr. Drake, the nice gentleman who moved\
in next door, but I think he is afraid of cats. Or allergic to them?\
 \
I am going to try putting Fat Igor on his shoulder next time I see\
him, very curious what will happen.\
Also, the scam I told you about is going better than expected. I\
have already gotten back five “payments,” and only one complaint.\
It is starting to make me feel a bit bad though. And you are right\
that it is probably illegal in some way.\
[etc., etc.]\
Much love,\
Aunt Emily\
died 27/04/2006: Black Leclère\
born 05/04/2006 (mother Lady Penelope): R Lion, Doctor\
Hobbles the 3rd, Little Iroquois'] ;

function addToSet(set, values) {
    for (var i =0; i < values.length; i++)
        set[values[i]] = true;
}

function removeFromSet(set, values) {
    for (var i = 0; i < values.length; i++)
        delete set[values[i]];
}

function findLivingCats() {
    var livingCats = {"Spot": true, "Deek": true, "Bawls": false};

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
console.log(findLivingCats);