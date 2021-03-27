/*
Given two values find out which one is nearest to 100
*/

const nearestTo100 = (first, second) =>
    100 - first < 100 - second ? `${first} is closer to 100` : `${second} is closer to 100`;

console.log(nearestTo100(20, 80));
console.log(nearestTo100(70, 30));
