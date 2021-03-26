//Data Presentation

function formatDate(date) {
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + 
        date.getFullYear();
}

function catInfo(data, name) {
    var cat = data[name];
    
    if (cat == undefined)
        return "No cat by the name of " + name + " is known.";

    var message = name + ", born" + formatDate(cat.birth) + 
                    " from mother " + cat.mother;

    if("death" in cat)
        message += ", died " + formatDate(cat.death);
        return message + ".";
}

console.log(catInfo(catData, "Fat Igor"));

//Oldest Cat function

function oldestCat(data) {
    var oldest = null;

    for (var name in data) {
        var cat = data[name];

        if (!("death" in cat) && (oldest == null || oldest.birth > cat.birth))
            oldest = cat;
    }

    if (oldest == null)
        return null;
    else
        return oldest.name;
}