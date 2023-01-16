const add = function(a, b) {
  let s = a + b;
  return s;
};

const subtract = function(a, b) {
	let c = a - b;
  return Math.abs(c);
};

const sum = function(xs) {
  if (xs.length === 0) {
    return 0;
  }
  return xs[0] + sum(xs.slice(1));
};

const multiply = function(xs) {
  if (xs.length === 0) {
    return 1;
  }
  return xs[0] * multiply(xs.slice(1));
};

const power = function(a, b) {
  let n = a;
	while (b > 1) {
    n = n * a;
    b--;
  }
  return n;
};

const factorial = function(a) {
	// 1! = 1 and 0! = 1
  if (a === 1 || a === 0) {
    return 1;
  }
  return a * factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
