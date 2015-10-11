var sum = (a, b) => a + b;
sum(2, 3); // 5

[2, 3].map(x => x * x); // [4,  9]

[2, 3].map(x => {
  console.log(x);
  return x * x;
}); // Logs 2 and 3 then returns [4, 9]
