//Print numbers from 1 to 200 that are divisible by both 3 and 5

function threeAndFive() {
    var numbers = [];
    var coolNumbers = [];

    for (i = 0; i < 200; i++){
        numbers.push(i+1);

        if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0)
            coolNumbers.push(numbers[i]);
    }
    return coolNumbers;
}

console.log(threeAndFive());

//Print only odd numbers divisible by 7

function oddDucks() {
    var numbers2 = [];
    var coolNumbers2 = [];

    for (var i = 0; i< 100; i++){
        numbers2.push(i+1);

        if (numbers2[i] % 2 != 0 && numbers2[i] % 7 == 0)
            coolNumbers2[i] = numbers2[i];
    }

    return coolNumbers2;
}

console.log(oddDucks());