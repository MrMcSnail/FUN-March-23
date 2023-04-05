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

function addF(num1) {
  return function (num2) {
    return add(num1, num2);
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
