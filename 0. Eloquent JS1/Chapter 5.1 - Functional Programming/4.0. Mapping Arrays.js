function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
    action(array[i]);
    }//for testing purposes
    
//another fundamental algorithm is called map

//It goes over an array like forEach but it builds up a new array from
//the values it goes over

function map(func, array) {
    var result = [];
    forEach(array, function (element) {
        result.push(func(element));
    });
    return result;
}

console.log(map(Math.round, [0.01, 2, 9.89, Math.PI]));