//Objects as Sets

var set = {"Spot": true};
set["White Fang"] = true;
delete set["Spot"];
console.log("Asoka" in set);

//Mutability

var object1 = {value: 10};
var object2 = object1;
var object3 = {value : 10};

console.log(object1 == object2, object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);
