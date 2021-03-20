const square = function(x) {
    return x * x;
}

console.log(square(10));

//Nested Scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
        unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
    };

hummus(2);

//Functions as values
let launchMissiles =function() {
    missileSystem.launch("now");
}
if(safeMode) {
    launchMissiles = function() {/* do nothing */};
}

//Shorter declaration
function square(x) {
    return x*x;
}

//Function declarations are not part of the top-to-bottom flow control
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}
    