const _ = require('../functions');

describe('factorial()', () => {
  test('should return the factorial of a given number', () => {
    expect(_.factorial(0)).toBe(1);
    expect(_.factorial(1)).toBe(1);
    expect(_.factorial(2)).toBe(2);
    expect(_.factorial(4)).toBe(24);
    expect(_.factorial(8)).toBe(40320);
    expect(_.factorial(11)).toBe(39916800);
  });
});
