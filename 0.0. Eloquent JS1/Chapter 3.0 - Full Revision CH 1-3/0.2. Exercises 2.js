//Percentage of a student

function percentageS(correct, total) {
    return correct/total * 100;
}

console.log(percentageS(12, 24) + "%");

//Discount price

function discount(discount1, price) {
    return price - (price * discount1/100);
}

console.log(discount(20, 50));

//Service tax

function serviceTax(totalP) {
    return totalP * 12.5/100;
}

console.log(serviceTax(100));

//Swap 2 numbers with temp variable

function swapN(no1, no2) {
    var temp = no1;
    no1 = no2;
    no2 = temp;
    return no1 + " " + no2;
}

console.log(swapN(1, 2));