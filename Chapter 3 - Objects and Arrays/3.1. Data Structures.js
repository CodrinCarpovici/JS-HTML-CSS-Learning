//Data STRUCTURES

//Properties
var text = "purple haze";
console.log(text["length"]);
console.log(text.length);

//Object Values
var cat = {color: "gray", name: "Spot", size: 46};
console.log(cat.size, cat.color, cat.name);
cat.size = 47;
console.log(cat.size);
delete cat.size;
console.log(cat.size);

//Empty object gets asigned value
var empty = {};
empty.notReally = 1000;
console.log(empty);

//Invalid variable names need brackets to be called
var thing = {"gabba gabba": "hey", 5: 10};
console.log(thing["5"]);
console.log(thing[2 + 3]);
delete thing["gabba gabba"];

//You can also use variables to name properties

var propertyName = "length";
var text2 = "coco";
console.log(text2[propertyName]);

//The in operator, can be used to test wheter something has a property

var chineseBox = {};
chineseBox.content = chineseBox;
console.log("content" in chineseBox);
console.log("content" in chineseBox.content);
