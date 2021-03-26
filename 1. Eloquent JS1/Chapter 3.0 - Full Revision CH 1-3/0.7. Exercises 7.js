//Print prime numbers in given range

function Prime2(range){
    var numbers = [];

    for (let i = 0; i < range; i++){
        numbers.push(i+1);

        for (let j = 2; j < numbers.length; j++){
            if (numbers[i] % j == 0)
                delete numbers[i];
                break;
        }
    }
    return numbers;
}

console.log(Prime2(20));
//UNFINISHED