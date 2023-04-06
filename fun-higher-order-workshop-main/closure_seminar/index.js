function add(summand1, summand2) {
  return summand1 + summand2;
}

function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}

function multiply(multiplier, multiplicand) {
  return multiplier * multiplicand;
}

function increment(num) {
  return add(num, 1);
}
// Write a function `addF` that adds from two invocations
function addF(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

function curry(binaryFunc, arg) {
  return function (secondArg) {
    return binaryFunc(arg, secondArg);
  };
}

module.exports = {
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry
};
