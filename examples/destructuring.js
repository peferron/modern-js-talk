var [first, , third, ...rest] = [1, 2, 3, 4, 5];
// first is 1
// third is 3
// rest is [4, 5]

var {a, b} = {a: 1, b: 2, c: 3};
// a is 1
// b is 2

var {a} = {};
// a is undefined

var {a = 1} = {};
// a is 1
