/*PROBLEM: Create a program that sorts through the emails from Aunt Emily
and stores the information on the cats that are alive and those that
died.
*/
/*ALGORITHM

1. Start with a set of cat names that has only “Spot” in it.
2. Go over every email in our archive, in chronological order.
3. Look for paragraphs that start with “born” or “died.”
4. Add the names from paragraphs that start with “born” to our set of
names.
5. Remove the names from paragraphs that start with “died” from our set.
Taking the names from a paragraph goes like this:
1. Find the colon in the paragraph.
2. Take the part after this colon.
3. Split this part into separate names by looking for commas.
*/

//Solving Aunt Emily's Problem

var livingCats = {"Spot": true};

for(var mail = 0; mail < ARCHIVE.length; mail++) {
    var paragraphs = ARCHIVE[mail].split("\n");

    for (var i = 0; i < paragraphs.length; i++) {
        var paragraph = paragraphs[i];
        
        if(startsWith(paragraph, "born")) {
            var names = catNames(paragraph);

            for (var name = 0; name < names.length; name++)
                livingCats[names[name]] = true;
        }
        else if (startsWith(paragraph, "died")) {
            var names = catNames(paragraph);

            for (var name = 0; name < names.length; name++)
                delete livingCats[names[name]];
        }
    }
}

if ("Spot" in livingCats)
    console.log("Spot lives!")
else
    console.log("Good old Spot, may she rest in peace.");

//putting in in a for loop to list all the cats that are alive
for(var cat in livingCats)
    console.log(cat);

//Cleaning up the code...
