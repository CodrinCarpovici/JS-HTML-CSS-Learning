import {SCRIPTS} from './scripts.js';

/*
Higher-order functions start to shine when you need to compose operations. As an example, let’s write code that finds the average year of
origin for living and dead scripts in the data set.
*/

function average(array) {
    return array.reduce((a,b) => a + b) / array.length;
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204