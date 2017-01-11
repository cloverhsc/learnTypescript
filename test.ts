const add1 = (a) => a + 1;
const times2 = (a) => a * 2;
const compose = (a, b) => (c) => a(b(c));
const add1OfTimes2 = compose(add1, times2);
console.log(add1OfTimes2(5)); // => 11

console.log([0, 1, 2, 3, 4].reduce(function(a, b) { return a + b; }, 0));

console.log({} === {});
console.log([] === []);
console.log([1, 2] === [1, 2]);
