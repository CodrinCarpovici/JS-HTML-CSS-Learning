//Print the numbers from 1 to 10

function numbaPrinter() {
    var Numbers = [];

    for (var i = 0; i < 10; i++){
        Numbers.push(i+1);
    }
    return Numbers;
}

console.log(numbaPrinter());

//Print numbers from 10 to 1

function numbaPrinter2() {
    var Numbers2 = [];

    for (var i = 0; i < 10; i++){
        Numbers2.push(10-i);
    }
    return Numbers2;
}

console.log(numbaPrinter2());

//Print Numbers if odd or even from 1 to 10

function oddOrEven(){
    var Numbers3 = [];
    var finalA = [];

    for (var i = 0; i < 10; i++){
        Numbers3.push(i+1);

        if (Numbers3[i] % 2 == 0)
            finalA.push(String(Numbers3[i]) + " is even");
        else
            finalA.push(String(Numbers3[i]) + " is odd");
    }


    return finalA;
}

console.log(oddOrEven());