//Avoiding Repetition
var number = 5;
if (number < 10)
console.log("0", number);
else
console.log(number);

//Improving it in a function
function zeroPad(number, width) {
    var string = String(Math.round(number));
    while (string.length < width)
    string = "0" + string;
    return string;
    }
console.log(zeroPad(5, 2));    
