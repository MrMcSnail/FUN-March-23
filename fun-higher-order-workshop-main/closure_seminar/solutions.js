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
    return num1 + num2;
  };
}

/*
it('returns the total of both invocations', () => {
  const addTo3 = addF(3);
  
  const threeAddFour = addTo3(4);
  
  expect(threeAddFour).toBe(7);
});
*/
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
