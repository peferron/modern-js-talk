var numbers = [-4, 5, 7, -2];

function isPositive(number) {
  return number >= 0;
}

numbers.map(isPositive);       // [false, true, true, false]
numbers.filter(isPositive);    // [5, 7]
numbers.some(isPositive);      // true
numbers.every(isPositive);     // false
numbers.find(isPositive);      // 5
numbers.findIndex(isPositive); // 1

numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0); // 6
