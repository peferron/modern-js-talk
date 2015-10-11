var str = `hello`;

// Multi-line strings.
var str = `especially useful in unit tests
for entering input and output values`;

// Expression interpolation.
var a = 2, b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// The sum of 2 and 3 is 5.

// Tagged template strings.
function myTagFunc(strings, ...values) {
  // Do something with `strings` and `values`...
  return 'Wow!';
}
console.log(myTagFunc`The sum of ${a} and ${b} is ${a + b}.`);
// Wow!
